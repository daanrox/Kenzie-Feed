import { Link } from 'react-router-dom'
import { StyledLink } from '../../../styles/Buttons'
import { StyledEditPostHeader } from './style'

export const EditPostheader = () =>{
    return (
        <>
        <StyledEditPostHeader>
            <h2>Editando:</h2>
            <StyledLink buttonheight='sm' buttonstyle='outline'>
                <Link to='/dashboard'><span className='material-symbols-outlined'>arrow_back</span>  Voltar</Link>
            </StyledLink>
        </StyledEditPostHeader>
        </>
    )
}