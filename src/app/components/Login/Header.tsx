import React from 'react';
import logo from '../../assets/MainPage/image7.svg'
import Image from "next/image";

const Header = () => {

    return <div className=' rounded-t-md bg-black text-white w-full h-[23%] overflow-x-hidden'>
        <div className='relative left-[38%] top-1/25 w-[27%] h-[96%] flex flex-row'>
            <Image className="relative top-1/20 w-[27%] h-[85%]" src={logo} alt='' />
            <div className='relative top-[-5%] left-1/20 flex flex-col justify-center
'>
                <div className='relative w-1/10 top-[-5%] text-[2.2rem] font-[InterExtraBold] text-center'> ALGALAR </div>
                <div className='relative w-full top-[-15%]  text-[0.8rem] font-[InterExtraBold] text-center'> техника безопасного вождения </div>
            </div>
        </div>
    </div>
}

export default Header;