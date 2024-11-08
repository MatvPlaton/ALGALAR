import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: RobotoMedium,sans-serif;
    position: absolute;
    top: 13%;
    color: black;
    left: 1.3%;
    font-size: 1.2vw;
`
const UnderHeaderText = () => {

    return <Wrapper> Введите данные для входа </Wrapper>
}

export default UnderHeaderText;