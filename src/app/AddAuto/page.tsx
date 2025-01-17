"use client"
import React, {useEffect, useState} from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import Header from "@/app/components/AddAuto/Header"
import ConfigFields from "@/app/components/AddAuto/ConfigFields"
import SeparateWheelFields from "@/app/components/AddAuto/SeparateWheelFields";
import emptyTire from "@/app/assets/AddAuto/Rectangle 41.svg";
import axios from "axios";
import {setToken} from "@/app/redux/authSlice";
import {setRefreshToken} from "@/app/redux/refreshSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import redactTire from "@/app/assets/AddAuto/Frame 3.svg";
import fullTire from "@/app/assets/AddAuto/Rectangle 36.svg";


const AutoPark = () => {

   
    const [redacting, setRedacting] = useState(false)
    const [axis,setAxis] = useState(2);
    const [isChecked, setIsChecked] = useState(false);
    const [currTire, setCurrTire] = useState(-1);
    const [isDoubled,setIsDoubled] = useState(Array(6).fill(false))


    const [images, setImages] = useState(Array(24).fill({full: false, img: emptyTire}))
    const [carId,setCarId] = useState('');

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
                dispatch(setRefreshToken(r.data['refreshToken']))
                console.log(r.data.accessToken)
                console.log(r.data.refreshToken)
            })
        }
        return error;
    });

    useEffect(() => {
        axios.get('https://algalar.ru:8080/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            console.log(r)
        }).catch()
    }, [currTire])

    const switchImage = (index : number) => {
        console.log(index)
        setCurrTire(index)
        setRedacting(true)
        setImages((prevImage) =>
            prevImage.map((item, i) => i === index  ? {...item, img: redactTire} :
                item.full ? {full: true, img: fullTire} : {full: false, img: emptyTire})
        );
    }

    return <div style={{backgroundColor: '#D9D9D9', height: '100vh'}}>
        <ProfileMenu height={'100vh'} activeField={'AddAuto'} />
        <Header />

        <ConfigFields carId={carId} switchImage={switchImage} setCarId={setCarId} images={images} isDoubled={isDoubled} setIsDoubled={setIsDoubled}
                      isChecked={isChecked} setIsChecked={setIsChecked}
                      axis={axis} setAxis={setAxis} currTire={currTire}/>

        <SeparateWheelFields carId={carId} setImages={setImages} setRedacting={setRedacting} currTire={currTire} redacting={redacting}/>
    </div>
}

export default AutoPark;