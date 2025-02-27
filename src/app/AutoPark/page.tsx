'use client';
import React, { useEffect, useState } from 'react';
import ProfileMenu from '@/app/components/Profile/ProfileMenu';
import Graphic from '@/app/components/AutoPark/Graphic';
import DataTable from '@/app/components/AutoPark/Table';
import Scheme from '../components/AutoPark/Scheme';
import GraphicButtons from '@/app/components/AutoPark/GraphicButtons';
import RepairTable from '@/app/components/AutoPark/RepairTable';
import axios, { AxiosError } from 'axios';
import Cookie from 'js-cookie';
import TitleBox from '../components/AutoPark/TitleBox';
import { DriversWrapper } from '../components/AutoPark/styles/DriversBox';
import { RestWrapper } from '../components/AutoPark/styles/RestBox';

const AutoPark = () => {
  axios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        console.log('401 Unauthorized - Attempting to Refresh Token');

        try {
          const refreshToken = Cookie.get('refresh');
          if (!refreshToken) {
            console.error('No refresh token found! Redirecting to login.');
            return Promise.reject(error);
          }

          const refreshResponse = await axios.post(
            'https://algalar.ru:8080/refresh',
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );

          // Save the new tokens
          const newAccessToken = refreshResponse.data.accessToken;
          const newRefreshToken = refreshResponse.data.refreshToken;

          Cookie.set('jwt', newAccessToken, {
            expires: new Date(new Date().getTime() + 20 * 60 * 1000),
            secure: true,
          });

          Cookie.set('refresh', newRefreshToken, {
            expires: 7,
            secure: true,
          });

          console.log('Token refreshed successfully.');

          // Retry the failed request with the new token
          error.config!.headers!['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(error.config!);
        } catch (refreshError) {
          console.error('Token refresh failed! Logging out...', refreshError);
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
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

  const fetchUserData = async (accessToken: string) => {
    try {
      const r = await axios.get(
        'https://algalar.ru:8080/auto/list?offset=0&limit=100',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(r);
      r.data.forEach((car: auto) => {
        axios
          .get(`https://algalar.ru:8080/auto/info?car_id=${car.id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((r) => setCars((oldCars) => [...oldCars, r.data]));
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const token = Cookie.get('jwt'); // Get the latest JWT token
    if (token) {
      fetchUserData(token);
    }
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
      <ProfileMenu activeField={'AutoPark'} />
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
