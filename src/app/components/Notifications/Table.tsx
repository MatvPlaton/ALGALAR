"use client"
import React  from 'react';
import styled from "styled-components";


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
    dataIndex: number;
    setDataIndex: React.Dispatch<React.SetStateAction<number>> 
}
const DataTable: React.FC<Prop> = ({dataIndex, setDataIndex}) => {

    const data = [
        new MyClass('A111AA196','БелАЗ75589','Механическая/Шина','28.10.2024/15:09'),
        
    ]
    return (
        <>
        <table style={{ position: 'absolute', left: '6.5%', top: '18%', width: '45%', borderCollapse: 'collapse' }}>
            <thead>
            <tr>
                <Wrap1>№</Wrap1>
                <Wrap> Гос Номер </Wrap>
                <Wrap>Марка Авто </Wrap>
                <Wrap> Поломка </Wrap>
                <Wrap> Дата/Время </Wrap>

            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr style={{cursor: 'pointer'}} onClick={() => setDataIndex(index)} key={index}>
                    <Wrap2 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{index + 1}</Wrap2>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{item.field1}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{item.field2}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{item.field3}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}} >{item.field4}</Wrap3>

                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
};

export default DataTable;
