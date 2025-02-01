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
import axios from "axios";
import { useAuthStore } from "../redux/store";
import { useRefreshStore } from "../redux/store";
import Cookies from "js-cookie";

const AutoPark = () => {
    const token = Cookies.get("jwt");
    const refresh = useRefreshStore((state) => state.refresh);
    
    const setToken = useAuthStore((state) => state.setToken);
    const setRefresh = useRefreshStore((state) => state.setRefresh);

    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            axios.post('https://algalar.ru:8080/refresh', {},{
                headers: {
                    Authorization: `Bearer ${refresh}`
                }
            }).then(r => {
                setToken(r.data.accessToken)
                setRefresh(r.data["refreshToken"])
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
                }).then(r => setCars(oldCars => [...oldCars,r.data]))
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
    const [type,setType] = useState('pressure');

    return <> <ProfileMenu height={'100vh'} activeField={'AutoPark'} />
                <Header />
                <DataTable setWheel={setWheel} cars={cars} dataIndex={dataIndex} setDataIndex={setCar}/>
                <Scheme car={currCar} wheel={wheel} setWheel={setWheel} dataIndex={dataIndex}/>
                <GraphicButtons index={dataIndex} setData={setData} wheel={wheel} car={currCar} type={type} setType={setType}/>
                <Graphic type={type} data={data} />
                <RepairButtons />
                <RepairTable />
    </>
}

export default AutoPark;