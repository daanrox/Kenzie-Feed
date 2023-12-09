import styled from 'styled-components'
import { titleTwo, titleTwoMobile } from '../../styles/Typography'

export const StylesPostPage = styled.section`
    .post_container{
        display: flex;
        flex-direction: column;

        gap: 2rem;

        margin: 2rem auto 0;

        width: 100%;
    }

   h2{
        ${titleTwoMobile}
    }

    @media(min-width: 768px){
        h2{
            ${titleTwo}
        }
    }
`