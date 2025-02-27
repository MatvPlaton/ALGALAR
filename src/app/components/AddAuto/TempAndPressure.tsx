import React from 'react';
import {
  Headers,
  MinFields,
  MinMaxWrapper,
  Temp,
  TempAndPressureWrapper,
} from '@/app/components/AddAuto/styles/TempAndPressure';
import AnyFieldoutlined from '@/app/components/AddAuto/AnyFieldoutlined';
import { FieldWrapper } from '@/app/components/AddAuto/styles/TempAndPressure';
import Image from 'next/image';
import temp from '../../assets/AddAuto/tempIcon.svg';
import bar from '../../assets/AddAuto/barIcon.svg';
interface Stats {
  number: string;
  size: string;
  ngp: string;
  model: string;
  brand: string;
  cost: string;
  tkvh: string;
  minPress: string;
  maxPress: string;
  minTemp: string;
  maxTemp: string;
}

interface Prop {
  redacting: boolean;
  wheels: Stats[];
  setWheels: React.Dispatch<React.SetStateAction<Stats[]>>;
  currTire: number;
}
const TempAndPressure: React.FC<Prop> = ({
  currTire,
  wheels,
  setWheels,
  redacting,
}) => {
  return (
    <>
      {' '}
      {redacting ? (
        <>
          <MinMaxWrapper>
            <div style={{ zIndex: 100, marginRight: '7.5vw' }}>
              {' '}
              Минимальное{' '}
            </div>
            <div> Максимальное </div>
          </MinMaxWrapper>
          <TempAndPressureWrapper>
            <Headers>
              <Temp> Температура</Temp>
              <Temp> Давление </Temp>
            </Headers>
            <MinFields>
              <FieldWrapper>
                <AnyFieldoutlined
                  field={'minTemp'}
                  index={currTire}
                  wheels={wheels}
                  setWheels={setWheels}
                  text={''}
                />
                <Image src={temp} alt={''} />
              </FieldWrapper>
              <FieldWrapper>
                <AnyFieldoutlined
                  field={'minPress'}
                  index={currTire}
                  wheels={wheels}
                  setWheels={setWheels}
                  text={''}
                />
                <Image src={bar} alt={''} />
              </FieldWrapper>
            </MinFields>
            <MinFields>
              <FieldWrapper>
                <AnyFieldoutlined
                  field={'maxTemp'}
                  index={currTire}
                  wheels={wheels}
                  setWheels={setWheels}
                  text={''}
                />
                <Image src={temp} alt={''} />
              </FieldWrapper>
              <FieldWrapper>
                <AnyFieldoutlined
                  field={'maxPress'}
                  index={currTire}
                  wheels={wheels}
                  setWheels={setWheels}
                  text={''}
                />
                <Image src={bar} alt={''} />
              </FieldWrapper>
            </MinFields>
          </TempAndPressureWrapper>{' '}
        </>
      ) : (
        <div />
      )}{' '}
    </>
  );
};

export default TempAndPressure;
