import React from 'react';
import styled from 'styled-components';

import {
    ButtonsWrapper,
    Report,
    TAndP,
    TempAndPressureWrapper,
    Wrapper
} from './styles/GraphicButtons'
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Sentence =  styled.div`
    font-family: RobotoMedium,sans-serif;
    letter-spacing: 0.1vw;
    font-size: 0.8vw;
    position: relative;
    top: 0.2vw;
`
const GraphicButtons = () => {

    return (
        <Wrapper>
            <TempAndPressureWrapper>
                <TAndP> ГРАФИК ПО ДАВЛЕНИЮ</TAndP>
                <TAndP style={{marginLeft: '4.3vw'}}> ГРАФИК ПО ТЕМПЕРАТУРЕ</TAndP>

            </TempAndPressureWrapper>
            <ButtonsWrapper>
                <Sentence> ВВЕДИТЕ ДАТУ </Sentence>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateField InputProps={{
            sx: {
                borderRadius: '2vw',
                height: '1.2vw',
                width: '10vw',
                fontSize: '1vw',
                marginLeft: '1vw',
                fontFamily: 'RobotoMedium,sans-serif',
                border: 'solid 0.1vw black',
            },
        }}
                            label=""
                            format="DD.MM.YYYY"
                        />
                </LocalizationProvider>
        </ButtonsWrapper>
            <Report> ОТЧЁТ ПО МАШИНЕ </Report>

        </Wrapper>
    )
}

export default GraphicButtons;