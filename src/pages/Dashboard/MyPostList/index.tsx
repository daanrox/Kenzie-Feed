import { useContext, useEffect } from 'react'
import { CardDashboard } from '../../../components/CardDashboard/index.tsx'
import { StyledMyPostList } from './style.ts'
import { ShowAllNewsContext, iShowAllNewsContext } from '../../../providers/ShowAllNewsProvider.tsx'
import { UserContext } from '../../../providers/UserProvider.tsx'

export interface iLikes{ 
  userId: number;
  postId: number;
  id: number;
}

interface Post {
  title: string;
  description: string;
  owner: string;
  userId: number;
  id: number;
  image: string;
  likes: Array<iLikes>; 
}
  
  export const MyPostList = () => {
    const { showAllNewsList, myPostList, setMyPostList } = useContext<iShowAllNewsContext>(ShowAllNewsContext)
    const { user } = useContext(UserContext)
    
    useEffect(() => {
      if (user) {
      const filteredPosts = showAllNewsList.filter((post: Post ) => post.userId === user?.id)
      setMyPostList(filteredPosts)
      } else{
        setMyPostList([])
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showAllNewsList, user])

    return (
      <StyledMyPostList>
        {myPostList.length > 0 ? (
          myPostList.map((myPost) => (
            <CardDashboard key={String(myPost.id)} myPosts={myPost} />
          ))
        ) : (
          <p className='my-post__empty'>Você não possui nenhuma publicação</p>
        )}
      </StyledMyPostList>
    )
  }