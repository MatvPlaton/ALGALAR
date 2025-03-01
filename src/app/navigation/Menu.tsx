'use client';
import React, { useState } from 'react';
import logo from '@/app/assets/MainPage/image7.svg';
import user from '@/app/assets/Profile/user 1.svg';
import autoPark from '@/app/assets/Profile/user 2.svg';
import location from '@/app/assets/Profile/user 3.svg';
import drivers from '@/app/assets/Profile/user 3 (1).svg';
import tires from '@/app/assets/Profile/user 3 (2).svg';
import addCar from '@/app/assets/Profile/user 3 (3).svg';
import addDriver from '@/app/assets/Profile/user 3 (4).svg';
import notifications from '@/app/assets/Profile/user 4.svg';
import exit from '@/app/assets/Profile/user 6.svg';
import clsx from 'clsx';

import userActive from '@/app/assets/Profile/ProfileActiveExpanded.svg';
import autoParkActive from '@/app/assets/Profile/ActiveAutoPark.svg';
import locationActive from '@/app/assets/Profile/ActiveLocation.svg';
import driversActive from '@/app/assets/Profile/ActiveDrivers.svg';
import addCarActive from '@/app/assets/Profile/ActiveAddAuto.svg';
import addDriverActive from '@/app/assets/Profile/ActiveAddDriver.svg';
import notificationsActive from '@/app/assets/Profile/ActiveNotifications.svg';

import arrow1 from '@/app/assets/Profile/Arrow1.svg';
import arrow2 from '@/app/assets/Profile/Arrow2.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';

const Menu = (props: { activeField: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  const router = useRouter();

  const Pictures: { [key: string]: [string, string, string] } = {
    profile: [user, userActive, 'Профиль'],
    autoPark: [autoPark, autoParkActive, 'Автопарк'],
    location: [location, locationActive, 'Местоположение Авто'],
    drivers: [drivers, driversActive, 'Статистика по водителям'],
    tires: [tires, tires, 'Статистика по шинам'],
    addAuto: [addCar, addCarActive, 'Добавить авто'],
    addDriver: [addDriver, addDriverActive, 'Добавить водителя'],
    notifications: [notifications, notificationsActive, 'Уведомления'],
    exit: [exit, exit, 'Выход'],
  };

  const exitSession = () => {
    Cookie.remove('jwt');
    Cookie.remove('refresh')
    router.push('/MainPage');
  };

  const handleClick = (key: string) => {
    if (key === "exit") {
      exitSession();
      return;
    }
    router.push(`/navigation/${key}`);

  };

  return (
    <div
      className={clsx(
        'absolute bg-black overflow-hidden transition-width duration-300 ease-in-out flex flex-col z-[100] h-[100vh] items-center',
        isExpanded ? 'w-[26.5vw]' : 'w-[4.8vw]'
      )}
    >
      <div
        className={` absolute h-[10vh] font-[InterExtraBold] text-white left-[2.3%] w-[17vw] flex`}
      >
        <Image
          className=" cursor-pointer fixed left-[1%] top-[1%] w-[3vw] h-[3vw]"
          onClick={() => router.push('/MainPage')}
          src={logo}
          alt=""
        />
        <div className={`relative left-[27.5%] top-[10%] text-[1.3vw] w-[4vw]`}>
          
          ALGALAR
        </div>
        <div className={`relative left-[4.2%] top-[45%] text-[0.6vw]`}>
          
          техника безопасного вождения
        </div>
      </div>
      <div className="absolute flex flex-col top-[10vh] w-[26.5vw] h-4/5 left-[5%]">
        {Object.keys(Pictures).map((key: string) => (
          <div
            className="cursor-pointer relative flex h-[15%] flex-row w-full"
            onClick={() => handleClick(key)}
            key={key}
          >
            {props.activeField === key ? (
              <Image
                className="absolute top-[-15%] left-[-0.2%] w-full h-[4.2vw]"
                src={Pictures[key][1]}
                alt={''}
              />
            ) : (
              <Image
                className="absolute left-[3.2%] w-[2.5vw] h-[2.5vw]"
                src={Pictures[key][0]}
                alt={''}
              />
            )}

            <div
              className={`relative left-[23%] top-[5%] font-[RobotoRegular] text-[1.4vw] text-${props.activeField === key ? 'black' : 'white'}`}
            >
              {' '}
              {Pictures[key][2]}{' '}
            </div>
          </div>
        ))}
      </div>

      <Image
        style={{ left: isExpanded ? '86%' : '30%' }}
        className={`transition-all duration-300 ease-in-out
                absolute top-9/10 w-[2vw] h-[4vh]`}
        onClick={toggleSidebar}
        src={isExpanded ? arrow1 : arrow2}
        alt=""
      />
    </div>
  );
};

export default Menu;
