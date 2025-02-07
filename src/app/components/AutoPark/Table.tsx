"use client"
import React, {useEffect, useState} from 'react';
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
interface Prop {
    setDataIndex: (index : number) => void;
    dataIndex: number;
    cars: car[];
    setWheel: React.Dispatch<React.SetStateAction<number>>;
}

const DataTable: React.FC<Prop> = ({ setWheel,cars,dataIndex, setDataIndex}) => {

    const [data, setData] = useState<MyClass[]>([])

    useEffect(() => {
        const updatedData = cars.map(
            (car) => new MyClass(car.auto.brand, car.auto.stateNumber, '0', car.auto.autoType)
        );
        setData(updatedData);
    }, [cars])
    const handleChange = (index: number) => {
        setDataIndex(index)
        setWheel(-1)
    }
    return (
        <div style={{position: 'absolute', left: '3%', top: '2%', maxHeight: '90%', overflowY: 'auto'}}> 
        <table style={{width: '90%', borderCollapse: 'collapse' }}>
            <thead style={{position: 'sticky',top: 0, zIndex: '2', background: 'white' }}>
            <tr>
                <Wrap1>№</Wrap1>
                <Wrap> Марка Автомобиля</Wrap>
                <Wrap>Гос Номер</Wrap>
                <Wrap>Кол-во поломок </Wrap>
                <Wrap>Тип Авто</Wrap>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr style={{cursor: 'pointer'}} onClick={() => handleChange(index)} key={index}>
                    <Wrap2 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{index + 1}</Wrap2>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{item.field1}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{item.field2}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{item.field3}</Wrap3>
                    <Wrap3 style={{backgroundColor: dataIndex === index ? "#43C5E24A" : ""}}>{item.field4}</Wrap3>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default DataTable;
