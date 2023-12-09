import { SubmitHandler, useForm } from 'react-hook-form'
import { StyledButton, StyledLink } from '../../styles/Buttons'
import { Container, RegisterBox } from '../../styles/Containers'
import { InputDivRegister, RegisterFormParagraph, RegisterFormTitle, StyledRegisterButton, StyledRegisterForm } from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import { iRegisterForm, registerSchema } from './registerSchema'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from "react"
import { UserContext } from '../../providers/UserProvider'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Register = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<iRegisterForm>({ resolver: zodResolver(registerSchema) })

    const { userRegister, navigate } = useContext(UserContext)

    useEffect(() => {
        if(localStorage.getItem("@KenzieFeed:token") && localStorage.getItem("@KenzieFeed:user")){
          navigate("/dashboard")
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    const submit: SubmitHandler<iRegisterForm> = (formData: iRegisterForm) =>{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { confirm, ...newFormData } = formData
        userRegister(newFormData)
        reset()
    }

    return(
        <Container>
            <Header />
            <StyledLink buttonheight='sm' buttonstyle='outline'><Link to="/login"><span className="material-symbols-outlined">arrow_back</span>Voltar</Link></StyledLink>
            <RegisterBox>
                <StyledRegisterForm onSubmit={handleSubmit(submit)} noValidate>
                    <RegisterFormTitle>Cadastre um usuário</RegisterFormTitle>
                    <RegisterFormParagraph>Preencha os campos corretamente para fazer login</RegisterFormParagraph>

                    <InputDivRegister>
                        <Input type='text' placeholder='Nome' {...register('name')} error={errors.name} />
                        <Input type='email' placeholder='E-mail' {...register('email')} error={errors.email} />
                        <Input type='password' placeholder='Senha' {...register('password')} error={errors.password} />
                        <Input type='password' placeholder='Confimar senha' {...register('confirm')} error={errors.confirm} />
                    </InputDivRegister>

                    <StyledRegisterButton>
                        <StyledButton buttonheight='md' buttonstyle='solid'>Cadastre-se</StyledButton>
                    </StyledRegisterButton>
                </StyledRegisterForm>
            </RegisterBox>
            <Footer />
        </Container>
    )    
}