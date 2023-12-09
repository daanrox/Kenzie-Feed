import { StyledLink } from '../../../styles/Buttons'
import { StyledHomeSectionBottom } from './Style'
import { NewsList } from '../../../components/NewsList'
import { useContext } from 'react'
import { ShowAllNewsContext } from '../../../providers/ShowAllNewsProvider'

export const HomeSectionBottom = () => {
    const { showAllNewsList } = useContext(ShowAllNewsContext)
    
    return(
        <StyledHomeSectionBottom>
            <div className='section-bottom__title'>
                <h2>Últimas notícias</h2>
                <StyledLink buttonheight='sm' buttonstyle='solid' className='section-bottom__to-all-news'>
                    <a href='/news'>Ver Tudo</a>
                </StyledLink>
            </div>
            <NewsList quantity={4} list={showAllNewsList}/>
        </StyledHomeSectionBottom>
    )
}