import { createContext, useState, useContext } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { iFormData } from '../components/AddPostModal'
import { api } from '../services'
import { ShowAllNewsContext, iShowAllNewsContext } from './ShowAllNewsProvider'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

export interface IAddPostProviderProps{
    children: React.ReactNode
}

export interface IAddPostContext{
    navigate: NavigateFunction;
    isOpen: boolean;
    closeModal: () => void;
    openModal: () => void;
    addPost: (formData: iFormData) => Promise<void>
}


export const AddPostContext = createContext({} as IAddPostContext);

export const AddPostProvider = ({ children }: IAddPostProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const { setMyPostList, myPostList } = useContext<iShowAllNewsContext>(ShowAllNewsContext);

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }

    

    const addPost = async (formData: iFormData) => {
        try {
            const token = localStorage.getItem('@KenzieFeed:token')
            const { data } = await api.post('/posts', formData, {      
                headers: {
                  Authorization: `Bearer ${token}`,
                }})
            if(data){
                let newPostList = []
                newPostList = [data, ...myPostList]
                setMyPostList(newPostList)
                toast.success("Post criado com sucesso!")
            }
        } catch (error) {
            const currentError = error as AxiosError<string>
            toast.error(currentError.message)
        }
    }

    return(
        <AddPostContext.Provider value={{ navigate, isOpen, closeModal, openModal, addPost }}>
            {children}
        </AddPostContext.Provider>
    )
}