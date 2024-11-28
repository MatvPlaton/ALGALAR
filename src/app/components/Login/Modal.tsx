import React from 'react';
import {ButtonStyles, ModalStyles, OverlayStyles} from "@/app/components/Login/styles/Modal";

interface Prop {
    showed: boolean;
    setShowed:  React.Dispatch<React.SetStateAction<boolean>>;

}
const Modal: React.FC<Prop> = ({showed,setShowed}) => {

    return ( <> {showed ?
        <OverlayStyles>
            <ModalStyles>
                <ButtonStyles onClick={() => setShowed(false)}>&#x00d7;</ButtonStyles>
                <h2>Неправильная почта или пароль!</h2>
            </ ModalStyles>
        </OverlayStyles> : <div/>} </>
    );
};

export default Modal;