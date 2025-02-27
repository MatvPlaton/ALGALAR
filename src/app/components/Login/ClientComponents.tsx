'use client';
import { useRef, useState } from 'react';
import Enter from './Enter';
import LoginField from './LoginField';
import LoginpasswordField from './LoginpasswordField';
import Notification from './Notification';

const ClientComponents = () => {
  const email = useRef('');
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    (email.current = e.target.value);

  const password = useRef('');
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    (password.current = e.target.value);

  const [showed, setShowed] = useState(false);

  return (
    <>
      <div className="relative top-[14%] left-[3%] flex-col">
        <LoginField handleChange={handleEmail} text={'E-mail'} />
        <LoginpasswordField handleChange={handlePassword} text={'Пароль'} />
      </div>
      
      <Enter email={email} password={password} setShowed={setShowed}/>
      <Notification message="Неправильный логин или пароль!" visible={showed} />
    </>
  );
};

export default ClientComponents;
