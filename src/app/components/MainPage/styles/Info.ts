import styled from 'styled-components';

export const InfoWrapper = styled.div`
    background-color: #1D1C1C;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100rem;
    top:43rem;
`
export const MainWrapper = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    left: 10%;
    top: 5%;
    height: 10vh;
`
export const MainDescription = styled.div`
    color: white;
    font-weight: bolder;
    font-size: 2.5rem;
    position: relative;
    font-family: MontserratBold, sans-serif;
`
export const MainAdditional = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    position: relative;
    font-family: MontserratBold, sans-serif;
    top: 50%;
`
export const EnumWrapper = styled.div`
    position: absolute;
    top: 20%;
    left: 10%;
    width: 55vw;
    height: 50rem;
    display: flex;
    flex-direction: column;
`
export const EnumWrapper1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;

`
export const EnumWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    position: relative;

`
export const FirstSentenceWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 24vw;
    height: 50%;
`
export const SentenceNumber = styled.div`
    color: #43C5E2;
    font-family: MontserratBold, sans-serif;
    font-weight: bold;
    font-size: 2rem;
    @media (max-width: 1000px) {
        font-size: 2.85vw;
    }
`
export const SentenceTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 10%;
    
`
export const Sentence = styled.div`
    color: white;
    font-weight: bold;
    font-size: 2rem;
    font-family: MontserratBold, sans-serif;
    @media (max-width: 1000px) {
        font-size: 2.85vw;
    }
`
export const Description = styled.div`
    color: white;
    font-size: 1.3rem;
    position: relative;
    top: 20%;
    text-align: left;
    line-height: 2rem;
    font-family: RobotoRegular, sans-serif;
    @media (max-width: 1000px) {
        font-size: 1.85vw;
    }
`
export const SecondSentenceWrapper = styled.div`
    position: relative;
    left: 10%;
    display: flex;
    flex-direction: row;
    width: 24vw;
    height: 50%;
`

export const AlgalarBlock = styled.div`
    background-color: #5A5CA8;
    color: white;
    left: 74%;
    top: 19%;
    position: absolute;
    text-align: left;
    width: 23%;
    height: clamp(16vw, calc(15% + 35rem), 50rem);
    border-radius: 2vw;
    font-family: RobotoBold, sans-serif;
    
`
export const AlgalarDescription = styled.div`
    position: relative;
    left: 12%;
    line-height: 3rem;
    text-align: left;
    font-size: 1.8rem;
    font-weight: bold;
    top: 5%;
    @media (max-width: 800px) {
        font-size: 3vw;
    }
`
export const Algalar01Descripion = styled.li`
    position: relative;
    left: 20%;
    text-align: left;
    font-size: clamp(0.02vw, 0.8vw + 0.5rem, 2.5rem);
    font-weight: bold;
    margin-bottom: 2rem;
    top: 10%;
    width: 70%;
    overflow-wrap: break-word;
    line-height: clamp(1vw, calc(2vw + 0.5rem), 2.5rem) ;
`
export const Algalar02Descripion = styled.li`
    position: relative;
    left: 20%;
    width: 70%;
    text-align: left;
    font-size: clamp(0.02vw, 0.8vw + 0.5rem, 2.5rem);
    margin-bottom: 2rem;
    top: 50%;
    overflow-wrap: break-word;
    line-height: clamp(1vw, calc(2vw + 0.5rem), 2.5rem) ;

`
export const Algalar03Description = styled.li`
    position: relative;
    left: 20%;
    text-align: left;
    font-size: clamp(0.02vw, 0.8vw + 0.5rem, 2.5rem);
    font-weight: bold;
    margin-bottom: 2rem;
    width: 70%;
    overflow-wrap: break-word;
    top: 70%;
    line-height: clamp(1vw, calc(2vw + 0.5rem), 2.5rem) ;
`
export const TiresWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    position: relative;
    top: 75%;
    height: 20rem;
    left: 10%;
`
export const PressureReminder = styled.div`
    color: white;
    font-size: clamp(0.02vw, 2rem, 5vw);
    left: 2.85%;
    top: 25%;
    transform: translateX(-20%);
    position: relative;
    text-align: right;
    line-height: clamp(0.02vw, 2rem, 5vw);
    font-family: MontserratSemiBold, sans-serif;
`
export const Tyre1 = styled.div`
    left: 1%;
    position: relative;
    width: clamp(0.02vw, 20rem, 20vw);
    height: 20rem;
`
export const Tyre2 = styled.div`
    position: relative;
    left: 5%;

    width: clamp(0.02vw, 20rem, 20vw);
    height: 20rem;
    
`
export const Logo = styled.div`
    left: 85%;
    top: -17%;
    position: absolute;
`
