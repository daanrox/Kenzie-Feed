import React, { createContext, useEffect, useState } from 'react'
import { api } from '../services'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

interface IUser{
    email: string,
    name: string,
    id: number
}

export interface IUserProviderProps{
    children: React.ReactNode
}

export interface IUserContext{
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    userLogin: (formData: iFormData) => Promise<void>;
    userLogout: () => void;
    userRegister: (formData: iRegisterFormData) => Promise<void>;
    navigate: NavigateFunction;
}

export interface iFormData{
    email: string,
    password: string
}

export interface iRegisterFormData{
    email: string,
    password: string,
    name: string
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null)

    const navigate = useNavigate()

    const userLogin = async (formData: iFormData) => {
        try {
            const { data } = await api.post('/login', formData)
            
            setUser(data.user)
            localStorage.setItem('@KenzieFeed:token', data.accessToken)
            localStorage.setItem('@KenzieFeed:user', JSON.stringify(data.user))
            localStorage.setItem('@KenzieFeed:user-id', data.user.id)
            toast.success("Login efetuado com sucesso!")
            navigate('/dashboard')
        } catch (error) {
            const currentError = error as AxiosError<string>
            toast.error(currentError.message)
        }
    }

    useEffect(() => {
        const currentUser = (localStorage.getItem("@KenzieFeed:user"))

        const AutoLogin = () => {
            if(currentUser){
                setUser(JSON.parse(currentUser))
            }
        }
        AutoLogin()
    }, [])

    const userRegister = async (formData: iRegisterFormData) => {
        try {
            const { data } = await api.post('/users', formData)
            if(data){
                navigate('/login')
                toast.success("Registro efetuado com sucesso!")
            }
        } catch (error) {
            const currentError = error as AxiosError<string>
            toast.error(currentError.message)
        }
    }

    const userLogout = () => {
        setUser(null)
        localStorage.removeItem("@KenzieFeed:token")
        localStorage.removeItem("@KenzieFeed:user")
        localStorage.removeItem("@KenzieFeed:user-id")
        toast.success("Logout efetuado com sucesso!")
        navigate('/')
    }

    return(
        <UserContext.Provider value={{ user, setUser, userLogin, userLogout, userRegister, navigate }}>
            {children}
        </UserContext.Provider>
    )
}