"use client"
import React from 'react';
import {EnterWrapper} from "./styles/Enter";
import {useRouter} from "next/navigation";
import axios, { AxiosError } from "axios";
import { useEmailStore } from '@/app/redux/store';
import { usePasswordStore } from '@/app/redux/store';
import { useAuthStore } from '@/app/redux/store';
import { useRefreshStore } from '@/app/redux/store';
import Cookie from 'js-cookie';

interface Prop {
    setShowed:  React.Dispatch<React.SetStateAction<boolean>>;
}
const Enter: React.FC<Prop> = ({setShowed}) => {

    const router = useRouter();
    const email = useEmailStore((state) => state.email);
    const password = usePasswordStore((state) => state.password);
    const setToken = useAuthStore((state) => state.setToken);
    const setRefresh = useRefreshStore((state) => state.setRefresh);

    axios.interceptors.response.use(
        response => response,
        async (error: AxiosError) => {
          if (error.response?.status === 400) {
            setShowed(true)
          }
        })

    const navigateToAnotherPage = () => {

        axios.post('https://algalar.ru:8080/login', {
            email: email,
            password: password
        }).then(r => {
            if (r.status === 200) {
                console.log(r)
                setToken(r.data.accessToken)
                setRefresh(r.data.refreshToken)
                Cookie.set("jwt", r.data.accessToken, { 
                    expires: new Date(new Date().getTime() + 20 * 60 * 1000), 
                    secure: true 
                });
                Cookie.set("refresh", r.data.refreshToken, {
                    expires: 7,
                    secure: true
                })
                router.push('../../Profile');
            } else {
                setShowed(true)
            }
        })

    };



    return <EnterWrapper onClick={() => navigateToAnotherPage()}> ВХОД </EnterWrapper>
}

export default Enter;