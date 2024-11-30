import React, {useEffect, useState} from "react";
import {ConfigFieldsWrapper, CopyButton} from './styles/ConfigFields';
import AnyField from "@/app/components/AddAuto/AnyField";
import SetTimezone from "@/app/components/AddAuto/SetTimezone";
import {HeaderText2} from "@/app/components/AddAuto/styles/ConfigFields";
import WheelConfig from "@/app/components/AddAuto/WheelConfig";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import {setToken} from "@/app/redux/authSlice";
import {setRefreshToken} from "@/app/redux/refreshSlice";
import Notification from "@/app/components/AddAuto/Notification";

interface Props {
    setRedacting: React.Dispatch<React.SetStateAction<boolean>>;
    axis : number;
    setAxis:  React.Dispatch<React.SetStateAction<number>>;
    isChecked : boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    currTire : number;
    setCurrTire : React.Dispatch<React.SetStateAction<number>>;
    isDoubled : boolean[];
    setIsDoubled : React.Dispatch<React.SetStateAction<boolean[]>>;
    images : string[];
    setImages : React.Dispatch<React.SetStateAction<string[]>>;
    setCarId: React.Dispatch<React.SetStateAction<string>>;
}



const ConfigFields: React.FC<Props> = ({setCarId,setRedacting,axis,
                                           setAxis,isChecked,setIsChecked,
                                           images,setImages,currTire,setCurrTire, isDoubled, setIsDoubled}) => {

    const [id, setId] = useState('');
    const [number,setNumber] = useState('');
    const [mark,setMark] = useState('');
    const [type,setType] = useState('');
    const [uniqueId,setUniqueId] = useState('');

    const [idTurn, setIdTurn] = useState(false);
    const [numberTurn, setNumberTurn] = useState(false);
    const [markTurn, setMarkTurn] = useState(false);
    const [typeTurn, setTypeTurn] = useState(false);
    const [uniqueIdTurn,setUniqueIdTurn] = useState(false);


    const token = useSelector((state: RootState) => state.auth.token);
    const refreshToken = useSelector((state: RootState) => state.refresh.refreshToken);

    const inn = useSelector((state: RootState) => state.inn.inn);
    const dispatch = useDispatch();

    const [isNotificationVisible, setNotificationVisible] = useState(false);

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
        axios.get('https://algalar.ru:8080/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then().catch()
    })
    const send  = () => {

        let flag = false;
        if (id === '') { setIdTurn(true); flag = true }
        if (number === '') { setNumberTurn(true); flag = true }
        if (mark === '') { setMarkTurn(true); flag = true }
        if (mark === '') { setMarkTurn(true); flag = true }
        if (type === '') { setTypeTurn(true); flag = true }
        if (uniqueId === '') { setUniqueIdTurn(true); flag = true }

        if (flag) return;
        axios.post('https://algalar.ru:8080/auto', {

            "companyInn": inn,
            "deviceId": id,
            "uniqueId": uniqueId,
            "AutoType": type,
            "stateNumber": number,
            "brand": mark,
            "axleCount": axis

        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            console.log(r);
            setNotificationVisible(true);
            setTimeout(() => {
                setNotificationVisible(false);
            }, 3000);
            setCarId(r.data.id) }).catch()
    }
    return <> <ConfigFieldsWrapper>
        <HeaderText2> Выберите конфигурацию колёсной системы</HeaderText2>

        <AnyField setTurn={setIdTurn} turn={idTurn} setField={setId} userField={id} text={'ID устройства*'} />
        <AnyField setTurn={setNumberTurn} turn={numberTurn} setField={setNumber} userField={number} text={'ГОС Номер*'} />
        <AnyField setTurn={setMarkTurn} turn={markTurn} setField={setMark} userField={mark} text={'Марка Авто*'} />
        <SetTimezone setTurn={setTypeTurn} turn={typeTurn} setField={setType} userField={type} text={'Тип Авто*'} />
        <AnyField setTurn={setUniqueIdTurn} turn={uniqueIdTurn} setField={setUniqueId} userField={uniqueId} text={'Уникальный ID*'} />

        <WheelConfig images={images} setImages={setImages} isDoubled={isDoubled} setIsDoubled={setIsDoubled}
                     setCurrTire={setCurrTire} isChecked={isChecked} setIsChecked={setIsChecked}
                     setRedacting={setRedacting} axis={axis} setAxis={setAxis} currTire={currTire}/>
        <CopyButton onClick={() => send()} top={`${(axis-2)*28.6}%`}> СОХРАНИТЬ </CopyButton>

    </ConfigFieldsWrapper>

        <Notification message={'Машина отправлена'} visible={isNotificationVisible}/> </>
}

export default ConfigFields;