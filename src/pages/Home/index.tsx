import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from '../../styles/Containers'
import { HomeSectionBottom } from './HomeSectionBottom/index'
import { HomeSectionTop } from './HomeSectionHome'
import { StyledHome } from './style'

export const Home = () => {        
   
    return(
        <StyledHome>
            <Header />
            <Container>
                <HomeSectionTop/>
                <HomeSectionBottom />
            </Container>
            <Footer />
        </StyledHome>
    )
}