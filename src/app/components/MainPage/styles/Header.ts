import styled from 'styled-components';
export const HeaderWrapper = styled.div`
    width: 100%;
    height: 21vh;
    background-color: black;
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    

`
export const LogoImg = styled.div`
    position: absolute;
    left: 20%;
    top: 25%;
    transform: scale(150%);
    height: 3vw;
    width: 3vw;
`
export const LogoAng = styled.div`
    position: absolute;
    left: 25%;
    top: 15%;
    font-size: 2vw;
    font-family: InterExtraBold, sans-serif;
`
export const LogoRest  = styled.div`
    position: absolute;
    left: 25%;
    top: 50%;
    font-family: InterExtraBold, sans-serif;
    font-weight: bolder;
    font-size: 1vw;
`
export const ProfileIc = styled.div`
    transform: scale(150%);
    left: -5%;
    top: 22%;
    width: 1vw;
    height: 1vh;
    position: relative;
    
`
export const Profile = styled.button`
    position: absolute;
    left: 75%;
    top: 25%;
    width: 13%;
    height: 25%;
    background-color: #43C5E2;
    border-radius: 0.5vw;
    font-size: 1vw;
    color: white;
    border: none;
    padding-left: 2vw;
    padding-bottom: 0.5vw;
    &:hover {
        background-color: #40b9d6;
    }
    &:active {
        transform: scale(95%);
        background-color: #43C5E2;
    }
`