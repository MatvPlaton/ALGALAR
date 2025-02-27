import React from 'react';
import logo from '../../assets/MainPage/image7.svg';
import Image from 'next/image';
import {
  ALGALAR,
  Description,
  HeaderWrapper,
  LogoWrapper,
  TextWrapper,
} from './styles/Header';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Image
          style={{ width: 'inherit', height: 'inherit' }}
          src={logo}
          alt=""
        />
        <TextWrapper>
          <ALGALAR> ALGALAR </ALGALAR>
          <Description> техника безопасного вождения </Description>
        </TextWrapper>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
