import styled from 'styled-components'
import { paragraphMobile, smallParagraph, titlePostMobile } from '../../../styles/Typography'

export const StyledPost = styled.div`
    display: flex;
    flex-direction: column;    

    gap: 1rem;    
    
    small{
        ${smallParagraph};
        align-self: center;
    }

    h2{
        ${titlePostMobile};
        align-self: center;
    }

    p{
        ${paragraphMobile}
    }

    img{
        max-height: 455px;
        width: 100%;
        border-radius: 25px;
    }

    .like__container{
        display: flex;
        
        align-items: center;

        gap: 0.6875rem;

        .like-button{
            height: 22px;
            width: 22px;
            cursor: pointer;
        }
    }

`