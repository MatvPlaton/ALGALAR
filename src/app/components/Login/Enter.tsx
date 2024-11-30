import React from 'react';
import {EnterWrapper} from "./styles/Enter";
import {useRouter} from "next/navigation";
import {setToken} from "@/app/redux/authSlice";
import {setRefreshToken} from "@/app/redux/refreshSlice"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {RootState} from "@/app/redux/store";

interface Prop {
    setShowed:  React.Dispatch<React.SetStateAction<boolean>>;
}
const Enter: React.FC<Prop> = ({setShowed}) => {

    const router = useRouter();
    const email = useSelector((state: RootState) => state.email.email);
    const password = useSelector((state: RootState) => state.password.password);

    const dispatch = useDispatch();

    const navigateToAnotherPage = () => {

        axios.post('https://algalar.ru:8080/login', {
            email: email,
            password: password
        }).then(r => {
            if (r.status === 200) {
                console.log(r)
                dispatch(setToken(r.data.accessToken))
                dispatch(setRefreshToken(r.data.refreshToken))
                router.push('../../Profile');
            }
        }).catch(() => setShowed(true))

    };



    return <EnterWrapper onClick={() => navigateToAnotherPage()}> ВХОД </EnterWrapper>
}

export default Enter;