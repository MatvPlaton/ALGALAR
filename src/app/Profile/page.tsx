"use client"
import React, {useEffect, useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import {FieldsWrapper} from "@/app/components/Profile/styles/FieldsWrapper";
import AnyField from "@/app/components/Profile/AnyField";
import RegistrationButton from "@/app/components/Profile/RegistrationButton";
import SetTimezone from "@/app/components/Profile/SetTimezone";
import SetRank from "@/app/components/Profile/SetRank";
import axios, { AxiosError } from "axios";
import Cookie from "js-cookie";
import TitleBox from "../components/Profile/TitleBox";
import { MainWrapper } from "../components/Profile/styles/MainBox";
import {useTimeZoneStore} from "../redux/store";
const Page = () => {

    const [name,setName] = useState('');
    const [secondName,setSecondName] = useState('');
    const [thirdName, setThirdName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [inn,setInn] = useState('');
    const [timezone,setTimezone] = useState('');

    axios.interceptors.response.use(
        response => response,
        async (error: AxiosError) => {
          if (error.response?.status === 401) {
            console.log('401 Unauthorized - Attempting to Refresh Token');
      
            try {
              const refreshToken = Cookie.get('refresh');
              if (!refreshToken) {
                console.error('No refresh token found! Redirecting to login.');
                return Promise.reject(error);
              }
      
              const refreshResponse = await axios.post('https://algalar.ru:8080/refresh', {}, {
                headers: {
                  Authorization: `Bearer ${refreshToken}`
                }
              });
      
              // Save the new tokens
              const newAccessToken = refreshResponse.data.accessToken;
              const newRefreshToken = refreshResponse.data.refreshToken;
      
              Cookie.set("jwt", newAccessToken, { 
                expires: new Date(new Date().getTime() + 20 * 60 * 1000), 
                secure: true 
              });
      
              Cookie.set("refresh", newRefreshToken, {
                expires: 7,
                secure: true
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
      const setZone = useTimeZoneStore((state) => state.setZone);

     const fetchUserData = async (accessToken: string) => {
        try {
          const response = await axios.get('https://algalar.ru:8080/user', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });

          console.log(response)
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
        const token = Cookie.get('jwt'); // Get the latest JWT token
        if (token) {
          fetchUserData(token);
        
      }}, []);

    return <div style={{backgroundColor: '#f2f3f4', height: '100vh'}}>
        <ProfileMenu activeField={'Profile'}/>
        <TitleBox />
        <MainWrapper>
        <FieldsWrapper>
            <div style={{position: 'relative', top: '-3%'}}> Редактирование профиля </div>
            <AnyField userField={name} setField={setName} text='Имя'  />
            <AnyField userField={secondName} setField={setSecondName} text='Фамилия*' />
            <AnyField userField={thirdName} setField={setThirdName} text='Отчество'  />
            <AnyField userField={phone} setField={setPhone} text='Телефон*'  />
            <AnyField userField={email} setField={setEmail} text='E-mail*'  />
            <AnyField userField={inn} setField={setInn} text='ИНН Компании'  />
            <SetRank />
            <SetTimezone userField={`${timezone}`} setField={setTimezone} />
        </FieldsWrapper>
        <RegistrationButton firstName={name} lastName={secondName} gender='' phone={phone} email={email} inn={inn} timeZone={Number(timezone)}/>
        </MainWrapper>
        </ div>
}

export default Page;