"use client"
import PasswordField from '@/app/components/Login/PasswordField'
import Header from '@/app/components/Login/Header';
import UnderHeaderText from "@/app/components/Login/UnderHeaderText";
import AnyField from "@/app/components/Login/AnyField";
import ForgotPassword from "@/app/components/Login/ForgotPassword";
import RegistrationButton from "@/app/components/Login/RegistrationButton";
import Enter from "@/app/components/Login/Enter";
import {FieldsWrapper} from "@/app/components/Login/styles/FieldsWrapper";
import {LoginWrapper} from "@/app/components/Login/styles/LoginWrapper";
import Modal from "@/app/components/Login/Modal";
import {useState} from "react";


const Login = () => {

    const [showed, setShowed] = useState(false);

    return <> <LoginWrapper>
        <Header/>
        <UnderHeaderText message='Введите данные для входа'/>
        <FieldsWrapper>
            <AnyField text={'E-mail'}/>
            <PasswordField text={'Пароль'}/>
        </FieldsWrapper>
        <ForgotPassword/>
        <RegistrationButton/>
        <Enter setShowed={setShowed}/>
    </LoginWrapper>
    <Modal setShowed={setShowed} showed={showed}/> </>
}


export default Login;