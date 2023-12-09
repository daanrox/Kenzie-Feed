import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { StyledButton } from '../../styles/Buttons'
import { Container, LoginBox } from '../../styles/Containers'
import { InputDiv, LoginFormParagraph, LoginFormTitle, StyledLoginDiv, StyledLoginForm, StyledLoginImg } from './style'
import { iLoginForm, loginSchema } from './loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../providers/UserProvider'
import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer/index'
import { Link } from "react-router-dom"
import loginImage from '../../assets/login-image.png' 

export const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<iLoginForm>({ resolver: zodResolver(loginSchema) })

    const { userLogin, navigate } = useContext(UserContext)

    useEffect(() => {
        if(localStorage.getItem("@KenzieFeed:token") && localStorage.getItem("@KenzieFeed:user")){
          navigate("/dashboard")
        }
      })

    const submit: SubmitHandler<iLoginForm> = (formData: iLoginForm) =>{
        userLogin(formData)
        reset()
    }

    return(
        <div>
            <Header />
            <Container>
                <StyledLoginDiv>
                    <StyledLoginImg src={loginImage}/>
                    <LoginBox>
                        <StyledLoginForm onSubmit={handleSubmit(submit)} noValidate>
                            <LoginFormTitle>Acesse o KenzieFeed</LoginFormTitle>
                            <LoginFormParagraph>Preencha os campos corretamente para fazer login</LoginFormParagraph>

                            <InputDiv>
                            <Input type='email' placeholder='E-mail' {...register('email')} error={errors.email} />
                            <Input type='password' placeholder='Senha' {...register('password')} error={errors.password} />
                            </InputDiv>
                            
                            <StyledButton buttonheight='md' buttonstyle='solid'>Entrar</StyledButton>

                            <LoginFormParagraph>Nao é cadastrado?</LoginFormParagraph>

                            <Link to="/register">Cadastre-se</Link>
                        </StyledLoginForm>
                    </LoginBox>
                </StyledLoginDiv>
            </Container>
            <Footer />
        </div>
    )
}