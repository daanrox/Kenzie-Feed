import styled from 'styled-components'
import { titleTwo, titleTwoMobile } from '../../../styles/Typography'

export const StyledHomeSectionBottom  = styled.section`    
    width: 100%;
    
    display: flex;

    flex-direction: column;

    gap: 2rem;

    .section-bottom__title{
        width: 100%;
        
        display: flex;

        justify-content: space-between;

        h2{
            ${titleTwoMobile}
        }
    }

    @media(min-width: 768px){
        .section-bottom__title{
            h2{
                ${titleTwo}
            }

        }
    }

    @media (max-width: 768px){

            .section-bottom__to-all-news{
                display: none;
            }
    }        
`