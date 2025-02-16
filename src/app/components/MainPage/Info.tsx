import React from "react";
import BadTyre1 from '../../assets/MainPage/bad_tyre1.webp.svg';
import BadTyre2 from '../../assets/MainPage/bad_tyre2.webp.svg';
import Image from "next/image";
const Info = () => {
    return <div className="absolute bg-[#1D1C1C] left-0 w-full h-[100rem] top-[43rem]">
       <div className="absolute flex flex-col left-[10%] top-[5%] h-[10vh]">
        <div className="relative text-white font-[MontserratBold] text-[2.5rem]"> Комплексное
            <span className="text-[#43C5E2]"> решение </span> в одном месте </div>
        <div className="relative text-white font-[MontserratBold] text-[1.5rem] top-1/2"> И в каких ситуациях вам необходима наша система </div>
       </div>
        <div className="absolute w-[55vw] h-[50rem] top-1/5 left-1/10 flex flex-col">
            <div className="flex flex-row w-full h-1/2">
            <div className="relative flex flex-row w-[24vw] h-1/2">
                <div className="text-[#43C5E2] font-[MontserratBold] text-[2rem]"> 01 </div>
                <div className="relative flex flex-col left-1/10">
                    <div className="text-white text-[2rem] font-bold font-[MontserratBold]">  Простой техники </div>
                    <div className="relative text-white text-[1.3rem] top-1/5 text-left leading-[2rem] font-[RobotoRegular]"> Дорожные происшествия, <br /> приводящие к простоям <br /> автотранспорта и дополнительным
                        <br /> затратам на ремонт </div>
                </div>
            </div>
            <div className="relative left-1/10 flex flex-row w-[24vw] h-1/2">
            <div className="text-[#43C5E2] font-[MontserratBold] text-[2rem]"> 02 </div>
            <div className="relative flex flex-col left-1/10">
            <div className="text-white text-[2rem] font-bold font-[MontserratBold]"> Быстрый износ <br /> и перегрев шин </div>
        <div className="relative text-white text-[1.3rem] top-1/5 text-left leading-[2rem] font-[RobotoRegular]"> Отсутствие своевременного контроля за <br />
            состоянием автошин и преждевременный <br /> выход из строя </div>
            </div>
            </div>
            </div>
        <div className=" relative flex flex-row w-full h-1/2">
            <div className="relative flex flex-row w-[24vw] h-1/2">
                <div className="text-[#43C5E2] font-[MontserratBold] text-[2rem]"> 03 </div>
                <div className="relative flex flex-col left-1/10">
        <div className="text-white text-[2rem] font-bold font-[MontserratBold]"> Нет актуальных данных <br /> для принятия решения </div>
        <div className="relative text-white text-[1.3rem] top-1/5 text-left leading-[2rem] font-[RobotoRegular]"> Выбор бренда автошин основывается на <br /> обещаниях продавца, а не на реальной <br />
            статистике использования </div> </div>
            </div>
            <div className="relative left-1/10 flex flex-row w-[24vw] h-1/2">
            <div className="text-[#43C5E2] font-[MontserratBold] text-[2rem]"> 04 </div>
            <div className="relative flex flex-col left-1/10">
        <div className="text-white text-[2rem] font-bold font-[MontserratBold]">Отсутствие удаленной <br /> системы контроля </div>
        <div className="relative text-white text-[1.3rem] top-1/5 text-left leading-[2rem] font-[RobotoRegular]"> Владелец не знает о текущем состоянии <br /> своего автопарка, поэтому сложно <br /> спрогнозировать расходы на техническое <br />
            обслуживание и ремонт</div>
            </div>
            </div>
        </div>
        </div>
        
        <div className="absolute top-[20%] left-[74%] w-[23%] h-[42rem] bg-[#5A5CA8] rounded-[2vw] text-left text-white font-[RobotoBold]">
            <div className="relative left-[12%] leading-[3rem] text-left text-[1.8rem] font-bold w-4/5 top-[2%]"> Платформа мониторинга <br/> <span className="text-[#43C5E2]"> ALGALAR </span>
            </div>
            <ul className="relative top-[5%] list-disc">
           
                <li className="relative left-1/5 w-7/10 top-[8%] leading-[2.5rem] text-left text-[1.4rem] font-bold mb-4 break-words"> <span
                    className="text-[#43C5E2]">  дистанционное <br/> управление </span> вашим <br/> автопарком и
                    водителем в <br/> любое время и в единой <br/> системе </li>
                <li className="relative left-1/5 w-7/10 top-[50%] leading-[2.5rem] text-left text-[1.4rem] font-bold mb-4 break-words"> отслеживание реакции <br/> водителя на изменение <br/> показателей
                </li>
                <li className="relative left-1/5 w-7/10 top-[70%] leading-[2.5rem] text-left text-[1.4rem] font-bold mb-4 break-words"> значительное <span className="text-[#43C5E2]"> сокращение  <br/> расходов </span> за
                    счет <br/> безопасной эксплуатации <br/> автотехники
                </li>
            </ul>
        </div>

        <div className="relative h-[20rem] w-4/5 top-3/4 left-1/10 flex flex-row">
        
        <div className="relative left-[2.85%] top-1/4 text-white text-right transform translate-x-[-20%] text-[2rem] leading-[2rem] font-[MontserratSemiBold]"> Отсутствие постоянного контроля <br />
            давления в шинах - это прямая <br />
            угроза безопасности вашего <br />
            автопарка и роста затрат! </div>

        <Image className=" relative top-[6%] left-[1%] w-[20rem] h-[15rem]" src={BadTyre1} alt='' />
        <Image className=" relative top-[6%] left-[10%] w-[20rem] h-[15rem]" src={BadTyre2} alt='' />
        </div>
    </div>
}

export default Info;