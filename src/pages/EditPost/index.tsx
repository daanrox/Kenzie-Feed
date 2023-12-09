import { Container, EditBox } from '../../styles/Containers'
import { EditPostForm } from './EditPostForm'
import { EditPostheader } from './EditPostHeader'
import { StyledBackground } from './style'
import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer/index'


export const EditPost = () => {
    return(
        <>
        <Header />
        <StyledBackground>           
            <Container>
                <EditBox>
                    <EditPostheader />
                    <EditPostForm />
                </EditBox>
            </Container>
        </StyledBackground>
        <Footer />
        </>
    )
}