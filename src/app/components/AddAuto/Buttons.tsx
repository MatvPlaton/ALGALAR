import React from 'react';
import {AddButton, ButtonsWrapper, CopyButton} from './styles/Buttons'

interface Props {
    redacting: boolean;
    send: () => void;
    copy: () => void;
}
const Buttons: React.FC<Props> = ({copy, send, redacting}) => {

    return (
        <ButtonsWrapper>
            {redacting ? <>
            <CopyButton onClick={() => copy()}> ВЗЯТЬ ДАННЫЕ С ПРЕДУЩЕГО КОЛЕСА </CopyButton>
            <AddButton onClick={() => send()}> ДОБАВИТЬ </AddButton>
            </> : <> </>}
        </ButtonsWrapper>
    )
}

export default Buttons;