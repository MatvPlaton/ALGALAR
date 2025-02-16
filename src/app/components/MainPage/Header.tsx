"use client"
import React from "react";
import Logotype from '../../assets/MainPage/image7.svg'
import NavigateButton from './NavigateButton'
import Image from "next/image";
const Header = () => {

    return <div className="absolute w-full h-[10rem] bg-black text-white flex">
       <div className="w-[32rem] h-3/5 translate-x-[-50%] relative left-1/3 top-[15%] flex max-w-[65vw] max-h-[34vh]">
        <Image className="w-[5vw] h-[vw]" src={Logotype} alt='' /> 
        <div className="relative left-[5%]">
            <div className="relative h-1/2 w-full text-left text-[2.3rem] font-extrabold font-[InterExtraBold]">
                ALGALAR </div>
                <div className="relative h-1/2 text-[1.2rem] font-extrabold font-[InterExtraBold]">
                технология безопасного вождения </div>
        </div>
        </div>
        <NavigateButton />
    </div>;
}

export default Header;