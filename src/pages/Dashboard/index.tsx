import { DashboardContainer, StyledMyPostContainer, } from './style'
import { MyPostHeader } from './MyPostHeader'
import { MyPostList } from './MyPostList'
import { Container } from '../../styles/Containers'
import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer/index'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../providers/UserProvider'
import { AddPostModal } from '../../components/AddPostModal'
 
export const Dashboard = () => {
    const token = localStorage.getItem('@KenzieFeed:token')
    const { navigate } =  useContext(UserContext)
    
    useEffect(() => {
        {!token ? navigate('/login'): null}
    },[])
    
    return(
        <>
            <AddPostModal />
            <Header />
            <DashboardContainer>
                <Container className='container'>
                    <StyledMyPostContainer className='container'>
                        <MyPostHeader />
                        <MyPostList />
                    </StyledMyPostContainer>
                </Container>
            </DashboardContainer>
            <Footer />
        </>
    )
}