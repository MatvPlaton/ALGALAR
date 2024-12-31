"use client"
import React, { useEffect, useState } from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import ProfileTitle from "../components/Drivers/ProfileTitle";
import Table from "../components/Drivers/Table";
import Diagram from "../components/Drivers/Diagram";
import Fields from "../components/Drivers/Fields";
import CircularChart from "../components/Drivers/CircularChart";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import axios from "axios";
import {setToken} from "@/app/redux/authSlice";
import {setRefreshToken} from "@/app/redux/refreshSlice";
const Page = () => {

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

    interface driverTemp {
    full_name: string,
    worked_time: number,
    experience: number,
    rating: number,
    breakages_count: number,
    driver_id: string     
    }

    interface driver {
        name: string,
        surname: string,
        middle_name: string,
        phone: string,
        birthday: string,
        worked_time: number,
        experience: number,
        rating: number,
        breakages_count: number,
    }

    const [drivers, setDrivers] = useState<driver[]>([]);

    const [index, setIndex] = useState(-1);

    const [driver,setDriver] = useState<driver>({name: "", surname: "", middle_name: "", phone: "", 
        birthday: "", worked_time: 0, experience: 0, rating: 0, breakages_count: 0})

    useEffect(() => {
        setDriver({name: "", surname: "", middle_name: "", phone: "", 
            birthday: "", worked_time: 0, experience: 0, rating: 0, breakages_count: 0})
        axios.get('https://algalar.ru:8080/driver/list?offset=0&limit=100', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            r.data.forEach( (driver : driverTemp) => {
                axios.get(`https://algalar.ru:8080/driver/info?driver_id=${driver.driver_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(res => {
                    const data : driver = {
                        name: res.data.name,
                        surname: res.data.surname,
                        middle_name : res.data.middle_name,
                        phone : res.data.phone,
                        birthday : res.data.birthday,
                        worked_time : driver.worked_time,
                        experience : driver.experience,
                        rating : driver.rating,
                        breakages_count : driver.breakages_count
                    }
                    
                    setDrivers(oldDrivers => [...oldDrivers, data])})
            })

        })
    },[])

    useEffect(() => {
        if (index >= 0 && index < drivers.length) {
            setDriver(drivers[index] );
        }
    }, [index,drivers])
    return <>
        <ProfileMenu height={'100vh'} activeField={'Статистика по водителям'}/>
        <ProfileTitle />
        <Table dataIndex={index} setDataIndex={setIndex} drivers={drivers} />
        <Diagram  drivers={drivers} index={index} />
        <Fields index={index} driver={driver}/>
        <CircularChart index={index} value={2.555}/>
        </>
}

export default Page;