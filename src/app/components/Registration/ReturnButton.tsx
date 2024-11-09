import React from 'react';
import {ReturnWrapper} from "./styles/ReturnButton";
import {useRouter} from "next/navigation";


const Enter = (props: {message: string}) => {
    const router = useRouter();

    const navigateToAnotherPage = () => {
        router.push('../../Login'); // Specify the path to the page you want to navigate to
    };
    return <ReturnWrapper onClick={() => navigateToAnotherPage()}> {props.message} </ReturnWrapper>
}

export default Enter;