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
                dispatch(setRefreshToken(r.data["refreshToken"]))
            })
        }
        return error;
    });
    interface auto {
        autoType : string
        axleCount : number
        brand : string
        deviceId : string
        id : string
        stateNumber : string
        uniqueId : string
    }
    interface wheel {
        autoId : string
        axleNumber : number
        id : string
        maxPressure : number
        maxTemperature : number
        mileage : number
        minPressure : number
        minTemperature : number
        ngp : number
        sensorNumber : string
        tireBrand : string
        tireCost : number
        tireModel : string
        tireSize : number
        tkvh : number
        wheelPosition : number
    }
    interface car {
        auto : auto
        wheels: wheel[]
    }
    interface data {
        PorT : number;
        time: string;
    }
    const [cars, setCars] = useState<car[]>([]);
    useEffect(() => {
        axios.get('https://algalar.ru:8080/auto/list?offset=0&limit=100', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            r.data.forEach((car: auto) => {
                axios.get(`https://algalar.ru:8080/auto/info?car_id=${car.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(r => {console.log(r); setCars(oldCars => [...oldCars,r.data])})
            })
        }).catch()
    }, [])
    const [dataIndex,setDataIndex] = useState(-1);
    // @ts-expect-error 1234
    const [currCar,setCurrCar] = useState<car>(null);
    const setCar = (index: number) => {
        setDataIndex(index);
        setCurrCar(cars[index]);
    }
    const [wheel, setWheel] = useState(-1);

    const [data,setData] = useState<data[]>([])

    return <> <ProfileMenu height={'100vh'} activeField={'Автопарк'} />
                <Header />
                <DataTable setWheel={setWheel} cars={cars} dataIndex={dataIndex} setDataIndex={setCar}/>
                <Scheme car={currCar} wheel={wheel} setWheel={setWheel} dataIndex={dataIndex}/>
                <GraphicButtons index={dataIndex} setData={setData} wheel={wheel} car={currCar} />
                <Graphic data={data} max={40}/>
                <RepairButtons />
                <RepairTable />
    </>
}

export default AutoPark;