import { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { iAddPostForm, addPostSchema } from './addPostSchema';
import { StyledModalForm } from '../../styles/ModalForm';
import { Input } from '../Input';
import { StyledButton } from '../../styles/Buttons';
import { ModalContainer, StyledTitleTwo } from './style';
import { UserContext } from '../../providers/UserProvider';
import { AddPostContext } from '../../providers/AddPostProvider';

export interface iFormData{
    title: string;
    image: string;
    description: string;
    owner: string;
    userId: number;
}

export const AddPostModal = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<iAddPostForm>({ resolver: zodResolver(addPostSchema) });

    const { user } = useContext(UserContext);

    const { closeModal, isOpen, addPost } = useContext(AddPostContext)

    const submit: SubmitHandler<iAddPostForm> = (formData: iAddPostForm) =>{
        const userId = user?.id
        const owner = user?.name
        if(userId && owner){
            const newformData: iFormData = {userId, owner, ...formData}
            addPost(newformData)
            reset()
        }else{
            console.log("Erro ao capturar informações do usuário.")
        }
    }

    return (
        <Dialog open={isOpen} onClose={() => closeModal()} sx={{
            '& .MuiDialog-container': {
              justifyContent: 'center',
              alignItems: 'center',
              margin: 0,
              backgroundColor: 'rgba(85, 163, 255, 0.30)',
            },
          }}
          PaperProps={{
            sx: {
              maxWidth: '49.875rem',
              width: '100%',
              backgroundColor: 'white',
              paddingInline: '2.78rem',
              paddingBottom: '2.38rem',
              gap: '1.94rem',
              display: 'flex',
              flexDirection: 'column'
            },
          }}>
            <ModalContainer>
                <StyledButton 
                    buttonheight='sm' 
                    buttonstyle='logoutIcon' 
                    className='close material-symbols-outlined' 
                    onClick={() => closeModal()}
                >
                    close
                </StyledButton>
                <StyledTitleTwo>Novo Post</StyledTitleTwo>
                <StyledModalForm onSubmit={handleSubmit(submit)} noValidate>
                    <Input type='text' placeholder='Título' {...register('title')} error={errors.title} />
                    <Input type='text' placeholder='Imagem em destaque' {...register('image')} error={errors.image} />
                    <textarea placeholder = 'Conteúdo do post' {...register('description')} rows={5}/>
                    {errors.description ? <p>{errors.description.message}</p> : null}
                    <StyledButton buttonheight='md' buttonstyle='solid'>Criar post</StyledButton>
                </StyledModalForm>
            </ModalContainer>
        </Dialog>
    )
}