'use client';
import { useRef } from 'react';
import RegistrationField from './RegistrationField';
import ReturnButton from './ReturnButton';
import RegistrationButton from './RegistrationButton';
import SetTimezone from './SetTimezone';
import RegistrationPasswordField from './RegistrationPasswordField';
import SetGender from './SetGender';
import { SelectChangeEvent } from '@mui/material';


const ClientComponents = () => {

  const refs = {
    email: useRef(''),
    name: useRef(''),
    secondName: useRef(''),
    gender: useRef(''),
    phone: useRef(''),
    inn: useRef(''),
    timezone: useRef(''),      
    password: useRef(''),
    passwordRepeat: useRef(''),
  }

  type RefKeys = keyof typeof refs;

  const handleChangeSelect = (key: RefKeys) => 
    (e: SelectChangeEvent) => {
      refs[key].current = e.target.value;
    };

  const handleChange = (key: RefKeys) => 
  (e: React.ChangeEvent<HTMLInputElement>) => {
    refs[key].current = e.target.value;
  };
     
  return  <> <div className="relative top-[3.64rem] left-[3%] flex-col">
    <RegistrationField text='E-mail' handleChange={handleChange('email')}/>
    <RegistrationField text='Имя' handleChange={handleChange('name')}/>
    <RegistrationField text='Фамилия' handleChange={handleChange('secondName')}/>
    <SetGender handleChange={handleChangeSelect('gender')}/>
    <RegistrationField text='Телефон' handleChange={handleChange('phone')}/>
    <RegistrationField text='Инн Компании' handleChange={handleChange('inn')}/>
    <RegistrationPasswordField text='Пароль' handleChange={handleChange('password')} />
    <RegistrationPasswordField text='Повторите Пароль' handleChange={handleChange('passwordRepeat')} />
    <SetTimezone handleChange={handleChangeSelect('timezone')}/>
    </div>
    <div className=" relative w-[30%] left-3/5 top-1/10 flex flex-row max-[801px]:left-[3%]">
    <ReturnButton />
    <RegistrationButton email={refs.email} name={refs.name} secondName={refs.secondName} 
    gender={refs.gender} phone={refs.phone} inn={refs.inn} password={refs.password} 
    passwordRepeat={refs.passwordRepeat} timezone={refs.timezone}/>
    </div> </>
};

export default ClientComponents;
