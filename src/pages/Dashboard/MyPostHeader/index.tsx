import { AddPostContext } from '../../../providers/AddPostProvider.tsx'
import { StyledButton } from '../../../styles/Buttons.ts'
import { StyledMyPostHeader, StyledTitleHeader } from './style.ts'
import { useContext } from 'react'


export const MyPostHeader = () =>{
    const { openModal } = useContext(AddPostContext)
    return (
        <StyledMyPostHeader>
                    <StyledTitleHeader>Suas Publicações</StyledTitleHeader>

                    <StyledButton buttonheight="sm" buttonstyle="solid" onClick={() => openModal()}>
                        <span className="material-symbols-outlined">add_circle</span> Novo Post 
                    </StyledButton>
        </StyledMyPostHeader>
    )
}