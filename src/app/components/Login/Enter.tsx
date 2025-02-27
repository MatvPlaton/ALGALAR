'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookie from 'js-cookie';

const Enter = (props: {email: React.RefObject<string>, password: React.RefObject<string>, setShowed: SetState<boolean>}) => {
  const router = useRouter();

  const navigateToAnotherPage = () => {
    console.log(props.email, props.password)
    axios
      .post('https://algalar.ru:8080/login', {
        email: props.email.current,
        password: props.password.current,
      })
      .then((r) => {
        Cookie.set('jwt', r.data.accessToken, {
          expires: new Date(new Date().getTime() + 20 * 60 * 1000),
          secure: true,
        });
        Cookie.set('refresh', r.data.refreshToken, {
          expires: 7,
          secure: true,
        });
        router.push('../../Profile');
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          props.setShowed(true);
          setTimeout(() => {
            props.setShowed(false);
          }, 3000);
        } else {
          console.error(error);
        }
      });
  };


  return (
      <button
        className="absolute bg-[#5A5CA8] w-[4.5rem] h-[2.5rem] 
    tracking-[0.1vw] border-none shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)] rounded-[0.4rem] 
    font-[RobotoMedium] text-[white]  text-[0.9rem] bottom-[1%] left-[93%]
    hover:bg-[#46478b] active:translate-y-[-5%]"
        onClick={() => navigateToAnotherPage()}
      >
        ВХОД
      </button>
  );
};

export default Enter;
