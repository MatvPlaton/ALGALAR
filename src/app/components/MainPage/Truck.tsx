import React from "react";
import Background from "../../assets/MainPage/Belaz.svg"
import Image from "next/image";

const Truck = () => {
    return <div className="absolute w-full top-[10rem] h-[34rem] left-0 z-10 bg-[#383838]">
            <Image className="relative left-[0.02%] w-full h-full" src={Background} alt='' />
            < div className="absolute bg-black/90 top-0 w-1/2 h-[34rem] z-100">
            <div className="relative text-white font-bold text-left left-[30.5%] h-[8rem] top-[15%] 
            font-[MontserratBold] w-[28vw] text-[2.5rem]"> 
                УНИКАЛЬНАЯ <br /> ПЛАТФОРМА ALGALAR </div>
                <div className="relative text-[#C5C5C5] text-left left-[31%] top-[20%] w-[30vw] 
                text-[1.4rem] font-[RobotoRegular] line-height-[2rem]"> 
                    высокая эффективность работы и своевременное <br /> 
                    реагирование на все изменения технических показателей </div>
            </div>
        </div>


}
export default Truck;