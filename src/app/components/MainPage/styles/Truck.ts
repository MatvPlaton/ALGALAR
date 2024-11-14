import styled from "styled-components";

export const TruckWrapper = styled.div`
    width: 100%;
    top: 10rem;
    height: 34rem;
    position: absolute;
    left: 0;
    z-index: 10;
    background-color: #383838;
`
export const TextWrapper = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    width: 50%;
    height: inherit;
    z-index: 100;
    left: 0;
`
export const BoldText = styled.div`
    color: white;
    font-weight: bold;
    text-align: left;
    position: relative;
    left: 30.5%;
    height: 8rem;
    
    top: 15%;
    width: 28vw;
    font-size: 2.5rem;
    font-family: MontserratBold, sans-serif;
    @media (max-width: 800px) {
     font-size: 6vw;
     left: 2%;
     top: 1%;   
    }   
`
export const RegularText = styled.div`
    color: #C5C5C5;
    text-align: left;
    position: relative;
    left: 31%;
    top: 20%;
    width: 30vw;
    font-size: 1.4rem;
    font-family: RobotoRegular, sans-serif;
    line-height: 2rem;
    @media (max-width: 800px) {
        font-size: 4vw;
        left: 2%;
    }
`