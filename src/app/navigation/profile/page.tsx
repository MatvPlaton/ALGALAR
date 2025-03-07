'use client';
import React, { useEffect, useState } from 'react';
import AnyField from './components/AnyField';
import RegistrationButton from './components/RegistrationButton';
import SetTimezone from './components/SetTimezone';
import SetRank from './components/SetRank';
import axios, { AxiosError } from 'axios';
import Cookie from 'js-cookie';
import TitleBox from './components/TitleBox';
import { useTimeZoneStore } from '@/app/redux/store';
import Menu from '../Menu';

const Page = () => {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [thirdName, setThirdName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inn, setInn] = useState('');
  const [timezone, setTimezone] = useState('');

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
  const setZone = useTimeZoneStore((state) => state.setZone);

  const fetchUserData = async (accessToken: string) => {
    try {
      const response = await axios.get('https://algalar.ru:8080/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setName(response.data.firstName);
      setSecondName(response.data.lastName);
      setPhone(response.data.phone);
      setEmail(response.data.email);
      setInn(response.data.inn);
      setTimezone(response.data.timeZone);
      setZone(response.data.timeZone);

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const token = Cookie.get('jwt')
    if (token) {
      fetchUserData(token);
    }
  }, []);

  return (
    <div className="bg-[#f2f3f4] h-[100vh]">
      <Menu activeField='profile'/>
      <TitleBox />
      <div className='absolute w-18/25 h-39/50 left-[6.5%] top-3/25 color-[#202020] rounded-[1vw] bg-white text-[2vw]'>
        <div className='absolute h-9/10 top-1/20 left-1/50 text-[1.4vw] font-[RobotoRegular]'>
          <div className="relative top-[-3%]">
            Редактирование профиля
          </div>
          <AnyField userField={name} setField={setName} text="Имя" />
          <AnyField
            userField={secondName}
            setField={setSecondName}
            text="Фамилия*"
          />
          <AnyField
            userField={thirdName}
            setField={setThirdName}
            text="Отчество"
          />
          <AnyField userField={phone} setField={setPhone} text="Телефон*" />
          <AnyField userField={email} setField={setEmail} text="E-mail*" />
          <AnyField userField={inn} setField={setInn} text="ИНН Компании" />
          <SetRank />
          <SetTimezone userField={`${timezone}`} setField={setTimezone} />
        </div>
        <RegistrationButton
          firstName={name}
          lastName={secondName}
          gender=""
          phone={phone}
          email={email}
          inn={inn}
          timeZone={Number(timezone)}
        />
      </div>
    </div>
  );
};

export default Page;
