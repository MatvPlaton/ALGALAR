'use client';
import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import Table from './components/Table';
import Diagram from './components/Diagram';
import Fields from './components/Fields';
import CircularChart from './components/CircularChart';
import TitleBox from './components/TitleBox';
import { MainWrapper } from './components/styles/MainBox';

interface driverTemp {
  full_name: string;
  worked_time: number;
  experience: number;
  rating: number;
  breakages_count: number;
  driver_id: string;
}

interface driver {
  name: string;
  surname: string;
  middle_name: string;
  phone: string;
  birthday: string;
  worked_time: number;
  experience: number;
  rating: number;
  breakages_count: number;
}

const Page = () => {
  const [drivers, setDrivers] = useState<driver[]>([]);
  const [index, setIndex] = useState(-1);
  const [driver, setDriver] = useState<driver>({
    name: '',
    surname: '',
    middle_name: '',
    phone: '',
    birthday: '',
    worked_time: 0,
    experience: 0,
    rating: 0,
    breakages_count: 0,
  });

  useEffect(() => {
    setDriver({
      name: '',
      surname: '',
      middle_name: '',
      phone: '',
      birthday: '',
      worked_time: 0,
      experience: 0,
      rating: 0,
      breakages_count: 0,
    });

    fetch('/api/drivers')
      .then((r) => r.json())
      .then((r) => {
        if (!r.success) return;
        const list: driverTemp[] = r.data;
        list.forEach((driverTemp) => {
          fetch(`/api/driverinfo?driver_id=${driverTemp.driver_id}`)
            .then((res) => res.json())
            .then((res) => {
              if (!res.success) return;
              const data: driver = {
                name: res.data.name,
                surname: res.data.surname,
                middle_name: res.data.middle_name,
                phone: res.data.phone,
                birthday: res.data.birthday,
                worked_time: driverTemp.worked_time,
                experience: driverTemp.experience,
                rating: driverTemp.rating,
                breakages_count: driverTemp.breakages_count,
              };
              setDrivers((oldDrivers) => [...oldDrivers, data]);
            })
            .catch((error) => console.error('Driver info fetch error:', error));
        });
      })
      .catch((error) => console.error('Drivers fetch error:', error));
  }, []);

  useEffect(() => {
    if (index >= 0 && index < drivers.length) {
      setDriver(drivers[index]);
    }
  }, [index, drivers]);

  return (
    <div style={{ backgroundColor: '#f2f3f4', height: '100vh' }}>
      <Menu activeField={'drivers'} />
      <TitleBox />
      <MainWrapper>
        <Table dataIndex={index} setDataIndex={setIndex} drivers={drivers} />
        <Diagram drivers={drivers} index={index} />
        <Fields index={index} driver={driver} />
        <CircularChart index={index} value={driver.rating} />
      </MainWrapper>
    </div>
  );
};

export default Page;
