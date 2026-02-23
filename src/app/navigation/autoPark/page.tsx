'use client';
import React, {useEffect, useState } from 'react';
import Menu from '../Menu';
import Graphic from './components/Graphic';
import DataTable from './components/Table';
import Scheme from './components/Scheme';
import GraphicButtons from './components/GraphicButtons';
import RepairTable from './components/RepairTable';
import { DriversWrapper } from './components/styles/DriversBox';
import { RestWrapper } from './components/styles/RestBox';
import TitleBox from './components/TitleBox';

const AutoPark = () => {
  
  interface auto {
    autoType: string;
    axleCount: number;
    brand: string;
    deviceId: string;
    id: string;
    stateNumber: string;
    uniqueId: string;
  }
  interface wheel {
    autoId: string;
    axleNumber: number;
    id: string;
    maxPressure: number;
    maxTemperature: number;
    mileage: number;
    minPressure: number;
    minTemperature: number;
    ngp: number;
    sensorNumber: string;
    tireBrand: string;
    tireCost: number;
    tireModel: string;
    tireSize: number;
    tkvh: number;
    wheelPosition: number;
  }
  interface car {
    auto: auto;
    wheels: wheel[];
  }

  interface data {
    PorT: number;
    time: string;
  }
  const [cars, setCars] = useState<car[]>([]);

  const fetchUserData = async () => {
    try {
      const res = await fetch('/api/autopark');
      const autopark = await res.json();
  
      const carsData = await Promise.all(
        autopark.data.map(async (car: auto) => {
          const res = await fetch(`/api/auto?id=${car.id}`);
          const data = await res.json();
          return data.data;   
        })
      );
  
      setCars(carsData);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

    useEffect(() => {
      
        fetchUserData();
  
    }, []);

  const [dataIndex, setDataIndex] = useState(-1);
  // @ts-expect-error 1234
  const [currCar, setCurrCar] = useState<car>(null);
  const setCar = (index: number) => {
    setDataIndex(index);
    setCurrCar(cars[index]);
  };
  const [wheel, setWheel] = useState(-1);

  const [data, setData] = useState<data[]>([]);
  const [type, setType] = useState('pressure');

  return (
    <div style={{ backgroundColor: '#f2f3f4', height: '100vh' }}>
      <Menu activeField={'autoPark'} />
      <TitleBox />
      <DriversWrapper>
        <DataTable
          setWheel={setWheel}
          cars={cars}
          dataIndex={dataIndex}
          setDataIndex={setCar}
        />
      </DriversWrapper>
      <RestWrapper>
        <Scheme
          car={currCar}
          wheel={wheel}
          setWheel={setWheel}
          dataIndex={dataIndex}
        />
        <GraphicButtons
          index={dataIndex}
          setData={setData}
          wheel={wheel}
          car={currCar}
          type={type}
          setType={setType}
        />
        <Graphic type={type} data={data} />
        <RepairTable car={currCar} />
      </RestWrapper>
    </div>
  );
};

export default AutoPark;
