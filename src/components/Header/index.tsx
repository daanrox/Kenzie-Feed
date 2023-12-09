import { useContext } from 'react'
import Logo from '../../assets/kzLogo.png'
import { HeaderContainer, HeaderUserDiv, StyledHeader, StyledLogo, StyledUserDiv, StyledUserIcon } from './style'
import { IUserContext, UserContext } from '../../providers/UserProvider'
import { StyledButton, StyledLink } from '../../styles/Buttons'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/Containers'

export const Header = () => {
    const { user, userLogout } = useContext<IUserContext>(UserContext)
    
    return(
        <StyledHeader>
            <Container>
                <HeaderContainer>
                    <StyledLogo src={Logo} alt='Kenzie-Feed Logo'/>
                    {
                        user ?
                        <HeaderUserDiv>
                                <StyledUserDiv>
                                    <StyledUserIcon>{user.name.substring(0,1)}</StyledUserIcon>
                                </StyledUserDiv>
                                <StyledLink buttonheight='sm' buttonstyle='outline'><Link to='/dashboard'>Dashboard</Link></StyledLink>
                                <StyledButton buttonheight='sm' buttonstyle='logoutIcon' className='material-symbols-outlined' onClick={() => userLogout()}>logout</StyledButton>
                            </HeaderUserDiv>
                            : <StyledLink buttonheight='sm' buttonstyle='solid'><Link to='/login'>Acessar</Link></StyledLink>
                        }
                </HeaderContainer>
            </Container>
        </StyledHeader>
    )
}