import { CardHome } from '../CardHome'
import { StyledNewList } from './Style'
import { iShowAllNews } from '../../providers/ShowAllNewsProvider'

interface iQuantity{
    quantity?: number;
    list: iShowAllNews[]
}

export const NewsList = ({quantity, list}: iQuantity) => {          
    return(
        <StyledNewList>            
            {list? list.slice(0, quantity).map((news) =>{                    
                return(                    
                    <CardHome key={news.id} news={news}/>                        
                    )
            }) :null}     
        </StyledNewList>
    )
}