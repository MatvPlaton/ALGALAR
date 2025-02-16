"use client"
import React, {useState, useEffect}  from 'react';
import styled from "styled-components";
import Cookie from 'js-cookie';
import axios from 'axios';

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
const Title = styled.div`
    position: absolute;
    left: 3.5%; 
    top: 2%;
    font-family: RobotoRegular, sans-serif;
    font-size: 1.3vw;
`
interface car {
    brand: string
    car_id: string
    state_number: string
    unique_id: string
}

interface Prop {
    dataIndex: number;
    setDataIndex: React.Dispatch<React.SetStateAction<number>> 
}
const DataTable: React.FC<Prop> = ({dataIndex, setDataIndex}) => {

    const token = Cookie.get('jwt');

    const [cars,setCars] = useState<car[]>([]);

    useEffect(() => {
        axios.get('https://algalar.ru:8080/positions/listcars?limit=100&offset=0', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => setCars(r.data))
    })
    return (
        <>
        <Title> Информация по Авто </Title> 
        <div className="absolute left-[3.5%] top-[10.5%] w-[95%] max-h-[85%] overflow-y-auto"> 
        <table style = {{width: '95%', borderCollapse: 'collapse'}}>
        <thead style={{position: 'sticky',top: 0, zIndex: '2', background: 'white' }}>
            <tr>
                <Wrap1>№</Wrap1>
                <Wrap> Уникальный ID </Wrap>
                <Wrap>Марка Авто </Wrap>
                <Wrap>Гос Номер </Wrap>
            </tr>
            </thead>
            <tbody>
            {cars.map((car, index) => (
                <tr style={{cursor: 'pointer'}} onClick={() => setDataIndex(index)} key={index}>
                    <Wrap2 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{index + 1}</Wrap2>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{car.unique_id}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{car.brand}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{car.state_number}</Wrap3>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </>
    );
};

export default DataTable;
