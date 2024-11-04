import styled from 'styled-components';
import Logotype from '../../assets/image7.svg'
import ProfileIcon from '../../assets/profile.svg'
const HeaderWrapper = styled.div`
    width: 100%;
    height: 15%;
    background-color: black;
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    

`
const LogoImg = styled.img`
    position: absolute;
    left: 20%;
    top: 25%;
    transform: scale(150%);
    height: 3vw;
    width: 3vw;
`
const LogoAng = styled.div`
    position: absolute;
    left: 25%;
    top: 15%;
    font-family: Inter,sans-serif;
    font-weight: 600;
    font-size: 2vw;
`
const LogoRest  = styled.div`
    position: absolute;
    left: 25%;
    top: 50%;
    font-family: Inter, sans-serif;
    font-weight: bolder;
    font-size: 1vw;
`
const ProfileIc = styled.img`
    transform: scale(150%);
    left: 10%;
    top: 30%;
    width: 1vw;
    height: 1vw;
    position: absolute;
    
`
const Profile = styled.button`
    position: absolute;
    left: 75%;
    top: 25%;
    width: 13%;
    background-color: #43C5E2;
    font-size: 1vw;
    color: white;
    text-align: right;
`
const Header = () => {

    return <HeaderWrapper>

        <LogoImg src={Logotype} alt=''/>
        <LogoAng> ALGALAR </LogoAng>
        <LogoRest> технология безопасного вождения </LogoRest>
        <Profile>
            <ProfileIc src={ProfileIcon} alt='' />
                Личный Кабинет </Profile>
    </HeaderWrapper>;
}

export default Header;