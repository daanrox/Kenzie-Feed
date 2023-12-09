import { StyledCardDashboard } from './style'
import { Post, ShowAllNewsContext, iShowAllNews } from '../../providers/ShowAllNewsProvider'
import { api } from '../../services'
import { useContext } from 'react'
import { AxiosError } from 'axios'
import { useNavigate  } from 'react-router-dom'
import { toast } from 'react-toastify'

export interface iCardDashboardProps{
    myPosts: iShowAllNews;
}

export interface iEditPostParams {
    myPosts: Post;
  }


export const CardDashboard = ({myPosts}: iCardDashboardProps) =>{
    
    const { myPostList, setMyPostList, setOpenEditPost } = useContext(ShowAllNewsContext);
    const navigate = useNavigate();

    const deletePost = async (postId: number) => {
    
        const token = localStorage.getItem('@KenzieFeed:token')
    
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            await api.delete(`/posts/${postId}`)          
            const updatedList = myPostList.filter((post: Post) => post.id !== Number(postId));
            setMyPostList(updatedList);
            toast.success('Post deletado com sucesso!')
        } catch (error) {
            const currentError = error as AxiosError<string>
            toast.error(currentError.message);
        }  
    }

    const editPost = (params: iEditPostParams) =>{
        setOpenEditPost(params.myPosts);
        navigate('/posts-edit', { state: params.myPosts });
    }

    return (
        <StyledCardDashboard id={String(myPosts.id)}>
            <div>
                <div className='card-dashboard__post-banner'>
                    <img src={myPosts.image} alt ='Título do post'/>
                </div>
                <div className='card-dashboard__post-title'>
                    <p>{myPosts.title}</p>
                </div>
            </div>
            <div>
                <span onClick={()=>{editPost({myPosts})}} className='material-symbols-outlined'>edit</span>
                <span onClick={()=>{deletePost(myPosts.id)}} className='material-symbols-outlined'>delete</span>    
            </div>
        </StyledCardDashboard>
    )
}