'use client';
import { useRef, useState } from 'react';
import Enter from './Enter';
import LoginField from './LoginField';
import LoginPasswordField from './LoginPasswordField';
import Notification from './Notification';

const ClientComponents = () => {

  const refs = {
    email: useRef(''),
    password: useRef('')
  }

  type RefKeys = keyof typeof refs;

  const handleChange = (key: RefKeys) => 
  (e: React.ChangeEvent<HTMLInputElement>) => {
    refs[key].current = e.target.value;
  };

  const [showed, setShowed] = useState(false);

  return (
    <>
      <div className="relative top-[14%] left-[3%] flex-col">
        <LoginField handleChange={handleChange('email')} text={'E-mail'} />
        <LoginPasswordField handleChange={handleChange('password')} text={'Пароль'} />
      </div>
      
      <Enter email={refs['email']} password={refs['password']} setShowed={setShowed}/>
      <Notification message="Неправильный логин или пароль!" visible={showed} />
    </>
  );
};

export default ClientComponents;
