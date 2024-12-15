"use client"
import React, {useEffect, useState} from 'react';
import styled from "styled-components";


class MyClass {
    field1: string;
    field2: string;
    field3: string;
    field4: number;

    constructor(field1: string, field2: string, field3: string, field4: number) {
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

const DataTable = () => {


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
        const temp = [new MyClass('Иванов В.А', 'нет', '6', 8), new MyClass('Сидоров В.А', 'нет', '12', 2.5), 
            new MyClass('Петров В.А', 'нет', '11', 4.3)]
        setData(temp)
    },[])
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
                <tr style={{cursor: 'pointer'}} key={index}>
                    <Wrap2>{index + 1}</Wrap2>
                    <Wrap3>{item.field1}</Wrap3>
                    <Wrap3>{item.field2}</Wrap3>
                    <Wrap3>{item.field3}</Wrap3>
                    <Wrap3 style={{color: chooseColor(item.field4)}}>{item.field4}/10</Wrap3>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default DataTable;
