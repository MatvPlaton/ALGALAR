"use client"
import React, {useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import {setToken} from "@/app/redux/authSlice";
import {setRefreshToken} from "@/app/redux/refreshSlice";
class MyClass {
    field1: string;
    field2: string;
    field3: string;
    field4: string;

    constructor(field1: string, field2: string, field3: string, field4: string) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.field4 = field4;
    }
}
// data/classesData.ts

const data: MyClass[] = [
    new MyClass('CAT 777', 'На Маршруте', '4', 'Самосвал'),
    new MyClass('БелАЗ 7555А', 'В автопарке', '2', 'Самосвал'),

];
// components/DataTable.tsx


const Wrap = styled.th`
    font-family: RobotoRegular, sans-serif;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.9);
    padding: 0.75vw;
    font-size: 1vw;
`
const Wrap1 = styled(Wrap)`
    border-right: 0.1vw solid rgba(0, 0, 0, 0.5);
    font-size: 1vw;

`
const Wrap2 = styled.td`
    border-right: 0.1vw solid rgba(0, 0, 0, 0.5);
    font-family: RobotoRegular, sans-serif;
    font-weight: normal;
    border-top: 0.1vw solid rgba(0, 0, 0, 0.5);
    border-bottom: 0.1vw solid rgba(0, 0, 0, 0.5);
    padding: 1vw;
    text-align: center;
    font-size: 1vw;

`
const Wrap3 = styled.td`
    font-family: RobotoRegular, sans-serif;
    font-weight: normal;
    border-top: 0.1vw solid rgba(0, 0, 0, 0.5);
    border-bottom: 0.1vw solid rgba(0, 0, 0, 0.5);
    padding: 1vw;
    text-align: center;
    font-size: 1vw;

`
interface Prop {
    setDataIndex: React.Dispatch<React.SetStateAction<number>>;
    dataIndex: number;
}
const DataTable: React.FC<Prop> = ({dataIndex, setDataIndex}) => {

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
        axios.get('https://algalar.ru:8080/auto?car_id=124', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            console.log(r)
        }).catch()
    })
    return (
        <table style={{ position: 'absolute', left: '6.5%', top: '15%', width: '40%', borderCollapse: 'collapse' }}>
            <thead>
            <tr>
                <Wrap1>№</Wrap1>
                <Wrap> Марка Автомобиля</Wrap>
                <Wrap>Статус Авто</Wrap>
                <Wrap>Кол-во поломок </Wrap>
                <Wrap>Тип Авто</Wrap>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr style={{cursor: 'pointer'}} onClick={() => setDataIndex(index)} key={index}>
                    <Wrap2 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{index + 1}</Wrap2>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{item.field1}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{item.field2}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{item.field3}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{item.field4}</Wrap3>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default DataTable;
