import { useForm } from 'react-hook-form'
import { StyledButton } from '../../../styles/Buttons.ts'
import { StyledEditForm } from '../../../styles/EditForm.ts'
import { editPostSchema } from './editPostSchema.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { ShowAllNewsContext, iShowAllNewsContext } from '../../../providers/ShowAllNewsProvider.tsx'
import { api } from '../../../services/index.tsx'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


interface iEditPost {
    title: string;
    description: string;
    owner: string;
    userId: number;
    id: number;
    image: string;
}


export const EditPostForm = () => {
    const { openEditPost, showAllNewsList, setShowAllNewsList } = useContext<iShowAllNewsContext>(ShowAllNewsContext);

    const { register, handleSubmit } = useForm<iEditPost>({
        resolver: zodResolver(editPostSchema)
    })

    const navigate = useNavigate()

    const editPost = async (data: iEditPost) => {
        const body = {
            ...data,
            owner: openEditPost.owner,
            userId: openEditPost.userId,
        }

        const token = localStorage.getItem('@KenzieFeed:token')

        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            const { data } = await api.put(`/posts/${openEditPost.id}`, body)

            let updatedPostList = [...showAllNewsList]
            const postListTemp = updatedPostList.filter(post => post.id !== openEditPost.id)

            updatedPostList = [data, ...postListTemp]

            toast.success('Post editado com sucesso!')

            setShowAllNewsList(updatedPostList)
            navigate('/dashboard')
        } catch (error) {
            const currentError = error as AxiosError<string>
            toast.error(currentError.message)
        }
    }

    return (
        <StyledEditForm onSubmit= {handleSubmit(editPost)} noValidate>
            <label>Título</label>
            <input {...register('title') } type = 'text' defaultValue = { openEditPost.title } placeholder = { 'Título do post'} />
            <label>Imagem em destaque</label>
            <input {...register('image') } type = 'text' defaultValue = { openEditPost.image } placeholder = 'Endereço da imagem' />
            <label>Conteúdo</label>
            <textarea {...register('description') } defaultValue = { openEditPost.description } placeholder = 'Conteúdo do post' />
            < StyledButton buttonheight = 'lg' buttonstyle = 'solid'>Salvar post</StyledButton>
        </StyledEditForm>
    )
}