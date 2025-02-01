"use client"
import React, {useEffect, useState} from 'react';
import styled from "styled-components";


class MyClass {
    field1: string;
    field2: number;
    field3: number;
    field4: number;

    constructor(field1: string, field2: number, field3: number, field4: number) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.field4 = field4;
    }
}
// data/classesData.ts


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
interface Prop{
    drivers: driver[]
    dataIndex: number,
    setDataIndex: React.Dispatch<React.SetStateAction<number>> 
}
const DataTable: React.FC<Prop> = ({drivers, dataIndex, setDataIndex}) => {

   
    
    const chooseColor = (rating : number) => {
        switch (true) {
            case (rating < 3):
                return '#b82222';
            case (3 <= rating && rating < 5):
                return '#da8d00';
            case (8 <= rating):
                return '#00BB00';
            default:
                return '#000000cedc'
        }
    }
    const [data, setData] = useState<MyClass[]>([])

    useEffect(() => {
        const parsedData = drivers.map(
            
            (driver) => new MyClass(`${driver.surname} ${driver.name} ${driver.middle_name}`, driver.worked_time, driver.experience, driver.rating)
        )
        setData(parsedData)
    },[drivers])
    return (
        <table style={{ position: 'absolute', left: '6.5%', top: '15%', width: '40%', borderCollapse: 'collapse' }}>
            <thead>
            <tr>
                <Wrap1>№</Wrap1>
                <Wrap> ФИО Водителей </Wrap>
                <Wrap>Кол-во часов работы</Wrap>
                <Wrap>Стаж работы </Wrap>
                <Wrap>Рейтинг</Wrap>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr style={{cursor: 'pointer'}} onClick={() => setDataIndex(index)} key={index}>
                    <Wrap2 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{index + 1}</Wrap2>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{item.field1}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{item.field2}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} > 0 г. {item.field3} мес.</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : "", color: chooseColor(item.field4)}}>{item.field4}/10</Wrap3>
                </tr>
            ))}
            </tbody>ю
        </table>
    );
};
export default DataTable;
