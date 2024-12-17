import React from 'react';
import styled from 'styled-components';

import {
    ButtonsWrapper,
    Report,
    TAndP,
    TempAndPressureWrapper,
    Wrapper
} from './styles/GraphicButtons'
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const Sentence =  styled.div`
    font-family: RobotoMedium,sans-serif;
    letter-spacing: 0.1vw;
    font-size: 0.8vw;
    position: relative;
    top: 0.2vw;
`
const StyledDatePicker = styled(DatePicker)(() => ({
    '& .MuiInputBase-root': {
      height: '1.3vw',
      width: '12vw',  
      borderRadius: '1vw',
      position: 'relative',
      left: '5%',
    },
  }));
  
const GraphicButtons = () => {

    const token = useSelector((state: RootState) => state.auth.token);

    const getReport = () => {
        axios.get('https://algalar.ru:8080/report', {
            headers: {
                    Authorization: `Bearer ${token}`
                }
        }).then(r => console.log((r)))
    }
    return (
        <Wrapper>
            <TempAndPressureWrapper>
                <TAndP> ГРАФИК ПО ДАВЛЕНИЮ</TAndP>
                <TAndP style={{marginLeft: '4.3vw'}}> ГРАФИК ПО ТЕМПЕРАТУРЕ</TAndP>

            </TempAndPressureWrapper>
            <ButtonsWrapper>
                <Sentence> ВВЕДИТЕ ДАТУ </Sentence>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StyledDatePicker sx={{BackgroundColor: 'blue'}}
                            label=""
                            format="DD.MM.YYYY"
                        />
                </LocalizationProvider>
        </ButtonsWrapper>
            <Report onClick={() => getReport()}> ОТЧЁТ ПО МАШИНЕ </Report>

        </Wrapper>
    )
}

export default GraphicButtons;