"use client"
import React, {useEffect, useState} from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import Graphic from "@/app/components/AutoPark/Graphic";
import DataTable from "@/app/components/AutoPark/Table";
import Header from "@/app/components/AutoPark/Header";
import Scheme from "../components/AutoPark/Scheme";
import GraphicButtons from "@/app/components/AutoPark/GraphicButtons";
import RepairButtons from "@/app/components/AutoPark/RepairButtons";
import RepairTable from "@/app/components/AutoPark/RepairTable";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import axios from "axios";
import {setToken} from "@/app/redux/authSlice";
import {setRefreshToken} from "@/app/redux/refreshSlice";


const AutoPark = () => {
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
                dispatch(setRefreshToken(r.data.refreshToken))
            })
        }
        return error;
    });
    useEffect(() => {
        axios.get('https://algalar.ru:8080/auto/list?offset=0&limit=10', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            console.log(r)
        }).catch()
    }, [])
    const [dataIndex,setDataIndex] = useState(-1);

    const [wheel, setWheel] = useState(-1);

    return <> <ProfileMenu height={'100vh'} activeField={'Автопарк'} />
                <Header />
                <DataTable dataIndex={dataIndex} setDataIndex={setDataIndex}/>

                <Scheme wheel={wheel} setWheel={setWheel} dataIndex={dataIndex}/>
                <GraphicButtons />
                <Graphic wheel={wheel} max={12}/>
                <RepairButtons />
                <RepairTable />
    </>
}

export default AutoPark;