import React from 'react';
import {RegistrationWrapper} from "./styles/RegistrationButton";

interface Prop {
    sendDriver : () => void;
}
const RegistrationButton : React.FC<Prop> = ({sendDriver}) => {


    return <RegistrationWrapper onClick={() => sendDriver()}> ДОБАВИТЬ </RegistrationWrapper>
}

export default RegistrationButton;