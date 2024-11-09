import React from 'react';
import {EnterWrapper} from "./styles/Enter";
import {useRouter} from "next/navigation";

const Enter = () => {

    const router = useRouter();

    const navigateToAnotherPage = () => {
        router.push('../../Profile'); // Specify the path to the page you want to navigate to
    };
    return <EnterWrapper onClick={() => navigateToAnotherPage()}> ВХОД </EnterWrapper>
}

export default Enter;