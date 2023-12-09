import { iShowAllNews } from '../../providers/ShowAllNewsProvider'
import { StyledCardHome } from './Style'
import { useNavigate } from 'react-router-dom'

interface iCardHomeProps{
    news: iShowAllNews;
}

export const CardHome = ({news}: iCardHomeProps) => {
    const navigate = useNavigate()
    
    return(
        <StyledCardHome>
            {news.image? <img src={news.image} />: <img src='https://cdn.pixabay.com/photo/2012/05/07/02/13/cancel-47588_1280.png' />}            
            <div className='card-home__text-container'>
                <p>{`Por: ${news.owner}`}</p>
                <h3>{news.title}</h3>
            </div>
            <a onClick={()=>{navigate(`/posts/${String(news.id)}`)}}>Leia mais</a>
        </StyledCardHome>
    )
}