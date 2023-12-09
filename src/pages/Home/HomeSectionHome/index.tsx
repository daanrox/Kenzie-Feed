import { StyledHomeSectionTop } from './Style'

import topImg from '../../../assets/home-top-section-img.svg'

export const HomeSectionTop = () => {
    return(
        <StyledHomeSectionTop>
            <small>KENZIE FEED</small>
            <h1>Seja muito bem vindo ao KenzieFeed</h1>
            <p>Fique por dentro das últimas notícias</p>
            <img src={topImg}  className='topImg'/>
        </StyledHomeSectionTop>
    )
}