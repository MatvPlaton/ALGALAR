'use client';
import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import Table from './components/Table';
import Diagram from './components/Diagram';
import Fields from './components/Fields';
import CircularChart from './components/CircularChart';
import axios from 'axios';
import { useAuthStore } from '@/app/redux/store';
import { useRefreshStore } from '@/app/redux/store';
import Cookies from 'js-cookie';
import TitleBox from './components/TitleBox';
import { MainWrapper } from './components/styles/MainBox';

const Page = () => {
  const token = Cookies.get('jwt');
  const refresh = useRefreshStore((state) => state.refresh);

  const setToken = useAuthStore((state) => state.setToken);
  const setRefresh = useRefreshStore((state) => state.setRefresh);

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        axios
          .post(
            'https://algalar.ru:8080/refresh',
            {},
            {
              headers: {
                Authorization: `Bearer ${refresh}`,
              },
            }
          )
          .then((r) => {
            setToken(r.data.accessToken);
            setRefresh(r.data['refreshToken']);
          });
      }
      return error;
    }
  );

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
    axios
      .get('https://algalar.ru:8080/driver/list?offset=0&limit=100', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        console.log(r);
        r.data.forEach((driver: driverTemp) => {
          axios
            .get(
              `https://algalar.ru:8080/driver/info?driver_id=${driver.driver_id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((res) => {
              console.log(res);
              const data: driver = {
                name: res.data.name,
                surname: res.data.surname,
                middle_name: res.data.middle_name,
                phone: res.data.phone,
                birthday: res.data.birthday,
                worked_time: driver.worked_time,
                experience: driver.experience,
                rating: driver.rating,
                breakages_count: driver.breakages_count,
              };

              setDrivers((oldDrivers) => [...oldDrivers, data]);
            });
        });
      });
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
