import React from 'react';
import {EnterWrapper} from "./styles/Enter";
import {useRouter} from "next/navigation";
import {clearToken, setToken} from "@/app/redux/authSlice";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {RootState} from "@/app/redux/store";

const Enter = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => state.email.email);
    const password = useSelector((state: RootState) => state.password.password);


    const navigateToAnotherPage = () => {
        console.log(email)
        console.log(password)

        axios.post('http://5.188.138.91:8080/login', {
            email: email,
            password: password
        }).then(r => {
            dispatch(setToken(r.data['accessToken']))
            axios.get('http://5.188.138.91:8080/user?id=0', {
                headers: {
                    Authorization: `Bearer ${r.data['accessToken']}`
                }
            }).then(r => {
                if (r.status === 200) {
                    console.log(r)
                    router.push('../../Profile');
                }
                if (r.status === 500) {
                    dispatch(clearToken())
                    console.log('wrong password or email')
                }
            })
        })

    };



    return <EnterWrapper onClick={() => navigateToAnotherPage()}> ВХОД </EnterWrapper>
}

export default Enter;