"use client"
import React, { useState } from 'react';
import {useRouter} from "next/navigation";
import axios from "axios";
import { useEmailStore } from '@/app/redux/store';
import { usePasswordStore } from '@/app/redux/store';
import { useAuthStore } from '@/app/redux/store';
import { useRefreshStore } from '@/app/redux/store';
import Notification from "./Notification";
import Cookie from 'js-cookie';

const Enter = () => {

    const router = useRouter();
    const email = useEmailStore((state) => state.email);
    const password = usePasswordStore((state) => state.password);
    const setToken = useAuthStore((state) => state.setToken);
    const setRefresh = useRefreshStore((state) => state.setRefresh);

    const navigateToAnotherPage = () => {

        axios.post('https://algalar.ru:8080/login', {
            email: email,
            password: password
        }).then(r => {
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

        }).catch(error => {
            if (error.response && error.response.status === 400) {
                setShowed(true);
                setTimeout(() => {
                    setShowed(false);
                }, 3000);
            } else {
                console.error(error);
            }
        });

    };

    const [showed, setShowed] = useState(false);

    return <> <button className='absolute bg-[#5A5CA8] w-[4.5rem] h-[2.5rem] 
    tracking-[0.1vw] border-none shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)] rounded-[0.4rem] 
    font-[RobotoMedium] text-[white]  text-[0.9rem] bottom-[1%] left-[93%]
    hover:bg-[#46478b] active:translate-y-[-5%]' onClick={() => navigateToAnotherPage()}> ВХОД </button>
    <Notification message="Неправильный логин или пароль!" visible={showed} />
    </>
}

export default Enter;