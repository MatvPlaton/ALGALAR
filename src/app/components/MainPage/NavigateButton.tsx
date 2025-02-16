"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import Cookie from 'js-cookie';
import ProfileIcon from '../../assets/MainPage/profile.svg'

const NavigateButton = () => {

    const router = useRouter();
    const token = Cookie.get('jwt');
    
    return <button className="relative left-3/4 top-[25%] w-[19rem] h-[35%] max-w-[40vw] text-white bg-[#43C5E2] rounded-md border-none text-[1.5rem] transform translate-x-[-220%] hover:bg-[#40b9d6] active:scale-95 active:bg-[#43C5E2]  sm:left-[74%] sm:text-center"
        onClick={() => token === undefined ? router.push('/login') : router.push('/Profile')}>
            <Image className="relative left-[8%] top-[15%] w-[2vw] h-[2vw]" src={ProfileIcon} alt='' /> 
            <div className="relative left-[10%] bottom-[50%]"> Личный Кабинет </div> 
            </button>
}

export default NavigateButton;
