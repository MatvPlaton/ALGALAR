import React from 'react';
import styled from 'styled-components';

import {
    ButtonsWrapper,
    Report,
    TAndP,
    TempAndPressureWrapper,
    Wrapper
} from './styles/GraphicButtons'

const Sentence =  styled.div`
    font-family: RobotoMedium,sans-serif;
    letter-spacing: 0.1vw;
    font-size: 0.8vw;
`
const GraphicButtons = () => {
    return (
        <Wrapper>
            <TempAndPressureWrapper>
                <TAndP> ГРАФИК ПО ДАВЛЕНИЮ</TAndP>
                <TAndP style={{marginLeft: '4.3vw'}}> ГРАФИК ПО ТЕМПЕРАТУРЕ</TAndP>

            </TempAndPressureWrapper>
            <ButtonsWrapper>
                <Sentence> ВВЕДИТЕ ДАТУ ДД.ММ.ГГГГ </Sentence>
        </ButtonsWrapper>
            <Report> ОТЧЁТ ПО МАШИНЕ </Report>

        </Wrapper>
    )
}

export default GraphicButtons;