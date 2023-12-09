import { createContext, useEffect, useState } from 'react'
import { api } from '../services'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { Post } from '../pages/PostPage/Post'

export interface iShowAllNewsProps{
    children: React.ReactNode
}

export interface iLikes{ 
    userId: number;
    postId: number;
    id: number;
}

export interface Post {
    title: string;
    description: string;
    owner: string;
    userId: number;
    id: number;
    image: string;
    likes: Array<iLikes>; 
}

export interface iShowAllNews{
    title: string;
    description: string;
    owner: string;
    userId: number;
    id: number;
    image: string;
    likes: Array<iLikes>;
}

export interface iShowAllNewsContext{
    showAllNewsList: iShowAllNews[]; 
    setShowAllNewsList: React.Dispatch<React.SetStateAction<iShowAllNews[]>>;
    setPostPagePath: React.Dispatch<React.SetStateAction<iShowAllNews | null>> ;
    postPagePath: iShowAllNews | null;
    isLiked: boolean;
    setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
    myPostList: Post[];
    setMyPostList: React.Dispatch<React.SetStateAction<Array<Post>>>;
    openEditPost: Post;
    setOpenEditPost: React.Dispatch<React.SetStateAction<Post>>
}

export const ShowAllNewsContext = createContext({} as iShowAllNewsContext)

export const ShowAllNewsProvider = ({children}: iShowAllNewsProps) => {
    const [showAllNewsList, setShowAllNewsList] = useState<iShowAllNews[]>([])     
    const [postPagePath, setPostPagePath] = useState<iShowAllNews | null>(null)    
    const [isLiked, setIsLiked] = useState(false)
    const [myPostList, setMyPostList] = useState<Post[]>([])
    const [openEditPost, setOpenEditPost] = useState<Post>(Object)
    
    useEffect(() => {
        const allNews = async () => {
            try {
                const { data } = await api.get<iShowAllNews[]>('/posts?_embed=likes')
                setShowAllNewsList(data)                
            } catch (error) {
                const currentError = error as AxiosError<string>
                toast.error(currentError.message)
            }
        }
        allNews()        
    }, [])               
     
    
    return(
        <ShowAllNewsContext.Provider value={{showAllNewsList, setPostPagePath, postPagePath, isLiked, setIsLiked, myPostList, setMyPostList, openEditPost, setOpenEditPost, setShowAllNewsList }}>
            {children}
        </ShowAllNewsContext.Provider>
    )
}