import { NewsList } from '../../components/NewsList'
import { Container } from '../../styles/Containers'
import { StyledAllNews } from './style'
import { useContext } from 'react'
import { ShowAllNewsContext } from '../../providers/ShowAllNewsProvider'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const AllNews = () => {
    const { showAllNewsList } = useContext(ShowAllNewsContext)
    return(
        <StyledAllNews>
            <Header />
            <Container>
                <div className='news_container'>
                    <h2>Todas as notícias</h2>
                    <NewsList list={showAllNewsList}/>
                </div>
            </Container>
            <Footer />
        </StyledAllNews>
    )
}