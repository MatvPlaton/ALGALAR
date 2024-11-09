import React from 'react';
import {useRouter} from "next/navigation";
import {RegistrationWrapper} from "./styles/RegistrationButton";

const RegistrationButton = () => {
    const router = useRouter();

    const navigateToAnotherPage = () => {
        router.push('../../Registration'); // Specify the path to the page you want to navigate to
    };
    return <RegistrationWrapper onClick={() => navigateToAnotherPage()}> РЕГИСТРАЦИЯ </RegistrationWrapper>
}

export default RegistrationButton;