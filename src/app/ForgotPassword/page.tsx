"use client"
import Header from '@/app/components/Login/Header';
import UnderHeaderText from "@/app/components/Login/UnderHeaderText";
import AnyField from "@/app/components/Login/AnyField";
import {FieldsWrapper} from "@/app/components/Login/styles/FieldsWrapper";
import Additional from "@/app/components/Registration/Additional";
import {useEffect, useState} from "react";

const ForgotPassword = () => {
    const [parentData, setParentData] = useState<string>('');
    const handleDataFromChild = (data: string) => {
        setParentData(data);

    };
    useEffect(() => {
        console.log(parentData);
    }, [parentData]);
    return <>
        <Header />
        <UnderHeaderText message='Сброс пароля'/>
        <Additional />
        <FieldsWrapper>
            <AnyField text={'E-mail'} onDataChange={handleDataFromChild}/>
        </FieldsWrapper>
    </>
}

export default ForgotPassword;