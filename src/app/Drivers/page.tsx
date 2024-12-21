"use client"
import React, { useEffect } from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import ProfileTitle from "../components/Drivers/ProfileTitle";
import Table from "../components/Drivers/Table";
import App1 from "../components/Drivers/Diagram";
import Fields from "../components/Drivers/Fields";
import CircularChart from "../components/Drivers/CircularChart";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import axios from "axios";
import {setToken} from "@/app/redux/authSlice";
import {setRefreshToken} from "@/app/redux/refreshSlice";const Page = () => {

    const token = useSelector((state: RootState) => state.auth.token);
    const refreshToken = useSelector((state: RootState) => state.refresh.refreshToken);
    const dispatch = useDispatch();
    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            axios.post('https://algalar.ru:8080/refresh', {},{
                headers: {
                    Authorization: `Bearer ${refreshToken}`
                }
            }).then(r => {
                dispatch(setToken(r.data.accessToken))
                dispatch(setRefreshToken(r.data["refreshToken"]))
            })
        }
        return error;
    });

    useEffect(() => {
        axios.get('https://algalar.ru:8080/driver/list', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => console.log((r)))
    })
    return <>
        <ProfileMenu height={'100vh'} activeField={'Статистика по водителям'}/>
        <ProfileTitle />
        <Table />
        <App1 />
        <Fields />
        <CircularChart value={2.534}/>
        </>
}

export default Page;