import React from 'react';
import {ForgotPasswordWrapper} from "./styles/ForgotPassword";
import {useRouter} from "next/navigation";

const ForgotPassword = () => {
    const router = useRouter();

    const navigateToAnotherPage = () => {
        router.push('../../ForgotPassword'); // Specify the path to the page you want to navigate to
    };
    return <ForgotPasswordWrapper onClick={() => navigateToAnotherPage()}> ЗАБЫЛИ ПАРОЛЬ </ForgotPasswordWrapper>
}

export default ForgotPassword;