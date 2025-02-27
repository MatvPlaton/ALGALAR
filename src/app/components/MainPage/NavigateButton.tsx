import Image from 'next/image';
import React from 'react';
import ProfileIcon from '../../assets/MainPage/profile.svg';
import { cookies } from 'next/headers';
import Link from 'next/link';

const NavigateButton = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get('jwt');

  return (
    <Link
      className="relative left-3/4 top-[25%]"
      href={token ? '/Profile' : '/login'}
    >
      <button className=" w-[19rem] h-[35%] max-w-[40vw] text-white bg-[#43C5E2] rounded-md border-none text-[1.5rem] transform translate-x-[-220%] hover:bg-[#40b9d6] active:scale-95 active:bg-[#43C5E2]  sm:left-[74%] sm:text-center">
        <Image
          className="relative left-[8%] top-[15%] w-[2vw] h-[2vw]"
          src={ProfileIcon}
          alt=""
        />
        <div className="relative left-[10%] bottom-[50%]"> Личный Кабинет </div>
      </button>{' '}
    </Link>
  );
};

export default NavigateButton;
