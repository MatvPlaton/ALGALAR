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

    const email = useRef('');
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      email.current = e.target.value;
      console.log(email.current)
    };
  
    const name = useRef('');
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
      name.current = e.target.value;
      console.log(name.current)
    };

    const secondName = useRef('');
    const handleSecondName = (e: React.ChangeEvent<HTMLInputElement>) => {
      secondName.current = e.target.value;
      console.log(secondName.current)
    };

    const gender = useRef('');
    const handleGender = (e: SelectChangeEvent) => {
      gender.current = e.target.value;
      console.log(gender.current)
    };

    const phone = useRef('');
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
      phone.current = e.target.value;
      console.log(phone.current)
    };

    const inn = useRef('');
    const handleInn = (e: React.ChangeEvent<HTMLInputElement>) => {
      inn.current = e.target.value;
      console.log(inn.current)
    };

    const timezone = useRef('');
    const handleTimezone = (e: SelectChangeEvent) => {
      timezone.current = e.target.value;
      console.log(timezone.current)
    };
    
    const password = useRef('');
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      password.current = e.target.value;
      console.log(password.current)
    };
    
    const passwordRepeat = useRef('');
    const handlePasswordRepeat = (e: React.ChangeEvent<HTMLInputElement>) => {
        passwordRepeat.current = e.target.value;
      console.log(passwordRepeat.current)
    }; 
     
  return  <> <div className="relative top-[3.64rem] left-[3%] flex-col">
    <RegistrationField text='E-mail' handleChange={handleEmail}/>
    <RegistrationField text='Имя' handleChange={handleName}/>
    <RegistrationField text='Фамилия' handleChange={handleSecondName}/>
    <SetGender handleChange={handleGender}/>
    <RegistrationField text='Телефон' handleChange={handlePhone}/>
    <RegistrationField text='Инн Компании' handleChange={handleInn}/>
    <RegistrationPasswordField text='Пароль' handleChange={handlePassword} />
    <RegistrationPasswordField text='Повторите Пароль' handleChange={handlePasswordRepeat} />
    <SetTimezone handleChange={handleTimezone}/>
    </div>
    <div className=" relative w-[30%] left-3/5 top-1/10 flex flex-row">
    <ReturnButton />
    <RegistrationButton email={email} name={name} secondName={secondName} 
    gender={gender} phone={phone} inn={inn} password={password} passwordRepeat={passwordRepeat} timezone={timezone}/>
    </div> </>
};

export default ClientComponents;
