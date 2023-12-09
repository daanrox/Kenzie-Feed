import styled from 'styled-components'
import { smallParagraph, titleThree } from '../../styles/Typography'

export const StyledCardHome = styled.li`
    width: 45%;
    min-width: 250px;
    
    height: 357px;

    display: flex;
    flex-direction: column;
    
    gap: 2rem;
    
    border-radius: 25px;   
    

    img{
        width: 100%;
        border-radius: 25px;
        height: 50%;

        object-fit: fill;
    }

    .card-home__text-container{
        display: flex;
        flex-direction: column;

        gap: 1rem;
    }

    p{
        ${smallParagraph}
    }

    h3{
        ${titleThree}
    }
`