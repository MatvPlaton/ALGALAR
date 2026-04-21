import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  ButtonsWrapper,
  Report,
  TAndP,
  TempAndPressureWrapper,
  Wrapper,
} from './styles/GraphicButtons';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useTimeZoneStore } from '@/app/redux/store';

dayjs.extend(utc);

const Sentence = styled.div`
  font-family: RobotoMedium, sans-serif;
  letter-spacing: 0.1vw;
  font-size: 0.8vw;
  position: relative;
  top: 0.2vw;
`;
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
  autoType: string;
  axleCount: number;
  brand: string;
  deviceId: string;
  id: string;
  stateNumber: string;
  uniqueId: string;
}
interface wheel {
  autoId: string;
  axleNumber: number;
  id: string;
  maxPressure: number;
  maxTemperature: number;
  mileage: number;
  minPressure: number;
  minTemperature: number;
  ngp: number;
  sensorNumber: string;
  tireBrand: string;
  tireCost: number;
  tireModel: string;
  tireSize: number;
  tkvh: number;
  wheelPosition: number;
}
interface car {
  auto: auto;
  wheels: wheel[];
}
interface data {
  PorT: number;
  time: string;
}
interface Props {
  car: car | null;
  wheel: number;
  setData: React.Dispatch<React.SetStateAction<data[]>>;
  index: number;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const GraphicButtons: React.FC<Props> = ({ index, setData, car, wheel, type, setType }) => {
  const timezone = useTimeZoneStore((store) => store.zone);

  const getReport = async () => {
    try {
      const response = await fetch('/api/report');
      if (!response.ok) return;
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'report.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Report fetch error:', error);
    }
  };

  const [value, setValue] = useState<Dayjs | null>(dayjs(null));

  const shiftByZone = (dayStart: Dayjs, end: boolean): string => {
    const now = dayjs();
    const timezoneOffsetHours = now.utcOffset() / 60;
    let shifted = dayStart.add(timezoneOffsetHours - (timezone ?? 0), 'hour');
    if (end) {
      shifted = shifted.add(1, 'day').add(-1, 'second');
    }
    return shifted.toDate().toISOString();
  };

  const chooseByPosition = (wheels: wheel[], position: number): string => {
    for (const w of wheels) {
      if (w.wheelPosition === position) return w.id;
    }
    return '';
  };

  useEffect(() => {
    if (car === null) return;
    if (!value || isNaN((value as Dayjs & { $y: number }).$y)) return;
    if (wheel === -1) { setData([]); return; }

    const params = new URLSearchParams({
      type,
      wheel_id: chooseByPosition(car.wheels, wheel),
      from: shiftByZone(value, false),
      to: shiftByZone(value, true),
    });

    fetch(`/api/sensordata?${params}`)
      .then((r) => r.json())
      .then((r) => { if (r.success) setData(r.data); })
      .catch((error) => console.error('Sensordata fetch error:', error));
  }, [value, type, car, wheel, index]);

  return (
    <Wrapper>
      <TempAndPressureWrapper>
        <TAndP onClick={() => setType('pressure')} style={{ color: type === 'pressure' ? '#5A5CA8' : 'black' }}>
          {' '}ГРАФИК ПО ДАВЛЕНИЮ
        </TAndP>
        <TAndP onClick={() => setType('temperature')} style={{ color: type === 'temperature' ? '#5A5CA8' : 'black', marginLeft: '4.3vw' }}>
          {' '}ГРАФИК ПО ТЕМПЕРАТУРЕ
        </TAndP>
      </TempAndPressureWrapper>
      <ButtonsWrapper>
        <Sentence> ВВЕДИТЕ ДАТУ </Sentence>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDatePicker
            sx={{ BackgroundColor: 'blue' }}
            label=""
            format="DD.MM.YYYY"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </ButtonsWrapper>
      <Report onClick={() => getReport()}> ОТЧЁТ ПО МАШИНЕ </Report>
    </Wrapper>
  );
};

export default GraphicButtons;
