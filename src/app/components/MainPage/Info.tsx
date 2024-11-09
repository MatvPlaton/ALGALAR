"use client"
import React from "react";
import Logotype from '../../assets/MainPage/image7.svg';
import BadTyre1 from '../../assets/MainPage/bad_tyre1.webp.svg';
import BadTyre2 from '../../assets/MainPage/bad_tyre2.webp.svg';
import Image from "next/image";
import {
    Algalar01Descripion, Algalar02Descripion, Algalar03Description,
    AlgalarBlock, AlgalarDescription,
    FirstDescription,
    FirstSentence, FourthDescription, FourthSentence,
    InfoWrapper, Logo,
    MainAdditional,
    MainDescription, PressureReminder, SecondDescription,
    SecondSentence, ThirdDescription, ThirdSentence, Tyre1, Tyre2
} from "./styles/Info";


const Info = () => {
    return <InfoWrapper>
        <MainDescription> Комплексное
            <span style={{color: '#43C5E2'}}> решение </span> в одном месте </MainDescription>
        <MainAdditional> И в каких ситуациях вам необходима наша система </MainAdditional>

        <FirstSentence> <span style={{color: '#43C5E2',marginRight: '0.6vw'}}> 01    </span> Простой техники</FirstSentence>
        <FirstDescription> Дорожные происшествия, <br />
            приводящие к простоям <br />
            автотранспорта и доп. затратам <br />
            на ремонт</FirstDescription>

        <SecondSentence> <span style={{color: '#43C5E2',marginRight: '0.6vw'}}> 02    </span> Быстрый износ <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; и перегрев шин </SecondSentence>
        <SecondDescription> Отсутствие своевременного контроля за <br />
            состоянием автошин и преждевременный <br /> выход из строя </SecondDescription>

        <ThirdSentence> <span style={{color: '#43C5E2',marginRight: '0.6vw'}}> 03    </span> Нет актуальных
            данных <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;для
            принятия решения </ThirdSentence>
        <ThirdDescription> Выбор бренда автошин основывается на <br /> обещаниях продавца, а не на реальной <br /> статистике использования </ThirdDescription>

        <FourthSentence> <span style={{color: '#43C5E2',marginRight: '0.6vw'}}> 04    </span> Отсутствие
            удаленной <br /> &ensp;&ensp;&ensp;&nbsp;
            системы контроля </FourthSentence>
        <FourthDescription> Владелец не знает о текущем состоянии <br /> своего автопарка, поэтому сложно <br /> спрогнозировать расходы на техническое <br />
            обслуживание и ремонт</FourthDescription>
        <AlgalarBlock>

            <AlgalarDescription> Платформа мониторинга <br/> <span style={{color: '#43C5E2'}}> ALGALAR </span>
            </AlgalarDescription>
            <ul>
                <Algalar01Descripion> <span
                    style={{color: '#43C5E2'}}>  дистанционное <br/> управление </span> вашим <br/> автопарком и
                    водителем в <br/> любое время и в единой <br/> системе </Algalar01Descripion>
                <Algalar02Descripion> отслеживание реакции <br/> водителя на изменение <br/> показателей
                </Algalar02Descripion>
                <Algalar03Description> значительное <span style={{color: '#43C5E2'}}> сокращение  <br/> расходов </span> за
                    счет <br/> безопасной эксплуатации <br/> автотехники
                </Algalar03Description>
            </ul>
        </AlgalarBlock>
        <PressureReminder> Отсутствие постоянного контроля <br />
            давления в шинах - это прямая <br />
            угроза безопасности вашего <br />
            автопарка и роста затрат! </PressureReminder>

        <Tyre1> <Image style={{width: '20vw', height: '20vw'}} src={BadTyre1} alt='' /> </Tyre1>
        <Tyre2> <Image style={{width: '20vw', height: '20vw'}} src={BadTyre2} alt='' /> </Tyre2>
        <Logo> <Image style={{width: '35vw', height: '70vh'}} src={Logotype} alt='' /> </Logo>
    </InfoWrapper>
}

export default Info;