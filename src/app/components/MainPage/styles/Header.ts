import styled from 'styled-components';
export const HeaderWrapper = styled.div`
    width: 100%;
    height: 10rem;
    background-color: black;
    color: white;
    position: absolute;
    display: flex;
`
export const LogoWrapper = styled.div`
    width: 32rem;
    height: 60%;
    transform: translateX(-50%);
    position: relative;
    left: 33%;
    top: 15%;
    display: flex;
    max-width: 65vw;
    max-height: 34vh;
`
export const LogoWrapperText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    left: 2%;
    top: -5%;
`
export const LogoImg = styled.div`
    position: relative;
    justify-content: center;
    height: 100%;
    width: auto;
`
export const LogoAng = styled.div`
    position: relative;
    height: 50%;
    width: 100%;
    text-align: left;
    font-size: 2.3rem;
    font-family: InterExtraBold, sans-serif;
`
export const LogoRest  = styled.div`
    position: relative;
    height: 50%;
    top: 20%;
    font-family: InterExtraBold, sans-serif;
    font-weight: bolder;
    font-size: 1.2rem;
`
export const ProfileIc = styled.div`
    transform: scale(200%);
    left: 10%;
    top: 5%;
    width: 1rem;

    height: 1rem;
    position: relative;
    @media (max-width: 600px) {
        display: none;
    }
`
export const Profile = styled.button`
    position: relative;
    left: 75%;
    color: white;
    top: 30%;
    width: 19rem;
    height: 35%;
    background-color: #43C5E2;
    transform: translateX(-220%);
    border-radius: 0.5rem;
    border: none;
    font-size: 1.5rem;
    max-width: 40vw;
    &:hover {
        background-color: #40b9d6;
    }
    &:active {
        transform: translateX(-220%) scale(95%);
        background-color: #43C5E2;
    }
    @media(max-width: 600px) {
        top: 40%;
        left: 74%;
        height: 45%;
        text-align: center;
    }
`
export const ButtonTextWrapper = styled.div`
    position: relative;
    top: -15%;
    left: 10%;
    @media(max-width: 600px) {
        left: 3%;
        top: -6%;
    }
`