import { NewsList } from '../../components/NewsList'
import { Container } from '../../styles/Containers'
import { Post } from './Post/index'
import { StylesPostPage } from './style'
import { useContext, useEffect } from 'react'
import { ShowAllNewsContext, iShowAllNews } from '../../providers/ShowAllNewsProvider'
import { useParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import { api } from '../../services'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { toast } from 'react-toastify'

export const PostPage = () => {

    const { showAllNewsList, setPostPagePath, postPagePath, isLiked} = useContext(ShowAllNewsContext)
    const filteredPost = showAllNewsList.filter((posts) => posts.id !== postPagePath?.id)    


    const {postid} = useParams()      
    
    useEffect(()=>{
        if(postid){
            const postByID = async () => {
                try {
                    const { data }  = await api.get<iShowAllNews>(`/posts/${postid}?_embed=likes`)
                    setPostPagePath(data)               
                     
                } catch (error) {
                    const currentError = error as AxiosError<string>
                    toast.error(currentError.message)
                }
            }   
            postByID()
        }
    },[postid, isLiked])

    
    return(
        <StylesPostPage>
            <Header />
            <Container>
                <Post/>
                <div className='post_container'>
                    <h2>Leia Também</h2>
                    <NewsList quantity={2} list={filteredPost}/>
                </div>
            </Container>
            <Footer />
        </StylesPostPage>
    )
}