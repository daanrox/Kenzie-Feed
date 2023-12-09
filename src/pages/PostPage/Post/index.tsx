import { useContext, useEffect, useState } from 'react'
import { EditBox } from '../../../styles/Containers'
import { StyledPost } from './Style'
import { ShowAllNewsContext } from '../../../providers/ShowAllNewsProvider'
import likeButton from '../../../assets/like-button.svg'
import { api } from '../../../services'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

interface iLike{
	userId: number;
	postId: number;
	id: number;    
}

export const Post = () => {   
    
    const { postPagePath, isLiked, setIsLiked } = useContext(ShowAllNewsContext)  
    const [likePostId, setLikePostId] = useState(Number) 
    
    const token = localStorage.getItem('@KenzieFeed:token')
    const userId = localStorage.getItem('@KenzieFeed:user-id')  
    
    useEffect(()=>{
        setIsLiked(false)
        postPagePath?.likes.forEach((element) => {  
            if(element?.userId == Number(userId)){
                return setIsLiked(true)
            }
        })        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLiked, postPagePath]) 
        
    const likes = async () => {
        const body = {
            userId: Number(userId),
            postId: postPagePath?.id  
        }

        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const {data}  = await api.post<iLike>(`/likes`, body) 
            setIsLiked(true) 
            setLikePostId(data.id)
        } catch (error) {
            const currentError = error as AxiosError<string>
            toast.error(currentError.message);
        }  
    }
    
    const deslike = async () => {
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            await api.delete(`/likes/${likePostId}`)  
            setIsLiked(false)        
        } catch (error) {
            const currentError = error as AxiosError<string>
            toast.error(currentError.message);
        }  
    }

    const liked = () => {
        if(isLiked === false) {            
            return likes()
        } else{            
            return deslike()
        }
    }

    return(
        <EditBox>
            <StyledPost>
                <small>{`Por: ${postPagePath?.owner}`}</small>
                <h2>{postPagePath?.title}</h2>
                {postPagePath?.image? <img src={postPagePath?.image} />: <img src='https://cdn.pixabay.com/photo/2012/05/07/02/13/cancel-47588_1280.png' />}  
                {postPagePath?.likes.length === 0?
                    <div className='like__container'>  
                        <img 
                            src={likeButton} 
                            className='like-button'
                            onClick={()=> liked()}
                        />                      
                        <small>Seja o primeiro a curtir este post</small>
                    </div>:
                    <div className='like__container'>
                        <img 
                            src={likeButton} 
                            className='like-button'
                            onClick={() => liked()}
                        />   
                        <small>{`${postPagePath?.likes.length} curtidas`}</small>
                    </div>}
                <p>{postPagePath?.description}</p>            
            </StyledPost>
        </EditBox>
    )
}