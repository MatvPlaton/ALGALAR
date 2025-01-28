// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react';
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
import { useAuthStore } from '@/app/redux/store';
import dayjs, { Dayjs } from 'dayjs';

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

  interface auto {
    autoType : string
    axleCount : number
    brand : string
    deviceId : string
    id : string
    stateNumber : string
    uniqueId : string
}
interface wheel {
    autoId : string
    axleNumber : number
    id : string
    maxPressure : number
    maxTemperature : number
    mileage : number
    minPressure : number
    minTemperature : number
    ngp : number
    sensorNumber : string
    tireBrand : string
    tireCost : number
    tireModel : string
    tireSize : number
    tkvh : number
    wheelPosition : number
}
interface car {
    auto : auto
    wheels: wheel[]
}
interface data {
    PorT : number;
    time: string;
}
interface Props {
    car: car | null
    wheel: number
    setData: React.Dispatch<React.SetStateAction<data[]>>;
    index: number
    type: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
}
const GraphicButtons: React.FC<Props> = (({index,setData, car,wheel,type,setType}) => {

    const token = useAuthStore((state) => state.token);

    const getReport = () => {
        axios.get('https://algalar.ru:8080/report', {
            headers: {
                    Authorization: `Bearer ${token}`
                }
        }).then(r => {
        
        console.log((r))
        const blob = new Blob([r.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        
        // Create a link element
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'report.xlsx'; // Specify the file name

        // Append to the body and trigger the download
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        })
    
    }
    const [value, setValue] = useState<Dayjs | null>(dayjs(null));

    const chooseByPosition = (wheels: wheel[],position: number) => {
        for (const wheel of wheels) {
            if (wheel.wheelPosition === position) {
                return wheel.id
            }
        }
        return '';
    }
    useEffect(() => {
        if (car === null || value === null) {
            return
        }
        if (wheel === -1) {
            setData([])
            return
        }
        axios.get(`https://algalar.ru:8080/${type}data?wheel_id=${chooseByPosition(car.wheels, wheel)}&from=${value.$y}-0${value.$M + 1}-${value.$D}T00:00:00Z&to=${value.$y}-0${value.$M + 1}-${value.$D}T23:59:59Z`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {console.log(r); setData(r.data)})
    }, [value,type,car,wheel, index])

    return (
        <Wrapper>
            <TempAndPressureWrapper>
                <TAndP onClick={() => setType('pressure')} style={{color: type === 'pressure' ? '#5A5CA8' : 'black'}}> ГРАФИК ПО ДАВЛЕНИЮ</TAndP>
                <TAndP onClick={() => setType('temperature')} style={{color: type === 'temperature' ? '#5A5CA8' : 'black',marginLeft: '4.3vw'}}> ГРАФИК ПО ТЕМПЕРАТУРЕ</TAndP>

            </TempAndPressureWrapper>
            <ButtonsWrapper>
                <Sentence> ВВЕДИТЕ ДАТУ </Sentence>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StyledDatePicker sx={{BackgroundColor: 'blue'}}
                            label=""
                            format="DD.MM.YYYY"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                        />
                </LocalizationProvider>
        </ButtonsWrapper>
            <Report onClick={() => getReport()}> ОТЧЁТ ПО МАШИНЕ </Report>

        </Wrapper>
    )
})

export default GraphicButtons;