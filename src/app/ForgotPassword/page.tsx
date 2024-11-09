"use client"
import Header from '@/app/components/Login/Header';
import UnderHeaderText from "@/app/components/Login/UnderHeaderText";
import AnyField from "@/app/components/Login/AnyField";
import {FieldsWrapper} from "@/app/components/Login/styles/FieldsWrapper";
import Additional from "@/app/components/Registration/Additional";

const ForgotPassword = () => {
    return <>
        <Header />
        <UnderHeaderText message='Сброс пароля'/>
        <Additional />
        <FieldsWrapper>
            <AnyField text={'E-mail'}/>
        </FieldsWrapper>
    </>
}

export default ForgotPassword;