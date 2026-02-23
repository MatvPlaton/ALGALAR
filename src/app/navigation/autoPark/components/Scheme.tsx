import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SchemeImage from '@/app/assets/AutoPark/SchemeWrapper.svg';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';
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
interface Prop {
  dataIndex: number;
  wheel: number;
  setWheel: React.Dispatch<React.SetStateAction<number>>;
  car: car;
}

const PressureWrapper = styled.div`
  text-align: center;
  position: relative;
  top: -29%;
  color: #1e1e1e;
  z-index: 100;
  font-family: RobotoBold, sans-serif;
  font-size: 1vw;
`;
const PressureNumber = styled(PressureWrapper)`
  border: solid black 0.1vw;
  border-radius: 0.4vw;
  top: -28%;
  width: 25%;
  height: 10%;
  left: 37.5%;
  display: grid;
  place-items: center;
`;
const Title = styled.div`
  text-align: center;
  position: relative;
  top: -125%;
  font-size: 1.2vw;
  color: #1e1e1e;
  font-family: RobotoBold, sans-serif;
`;
const WheelsWrapper = styled.div`
  position: absolute;
  top: 3%;
  left: 5%;
  height: 100%;
  width: 100%;
`;
interface WheelProp {
  wheelposition: number;
}
interface wheelData {
  pressure: number;
  temperature: number;
  wheel_position: number;
}
const Wheel = styled.div<WheelProp>`
  background: linear-gradient(to bottom right, #43c5e2, #5a5ca8);
  position: absolute;
  top: ${(props) =>
    `${((props.wheelposition - (props.wheelposition % 4)) / 4) * 15}%`};
  left: ${(props) =>
    props.wheelposition % 4 <= 1
      ? `${(props.wheelposition % 4) * 20}%`
      : `calc(15% + ${(props.wheelposition % 4) * 20}%)`};
  width: 2.3vw;
  height: 2.6vw;
  border-radius: 0.4vw;
  flex-direction: column;
  margin-bottom: 0.4vw;
  cursor: pointer;
`;

const ParamWrapperActive = styled.div`
  color: white;
  width: 80%;
  position: relative;
  left: 10%;
  text-align: center;
  background: linear-gradient(#9cdde9, #899ee0);
  top: 10%;
  height: 80%;
  border-radius: 0.3vw;
  font-size: 1vw;
`;

const ParamWrapper = styled(ParamWrapperActive)`
  background: white;
  color: black;
`;
const Scheme: React.FC<Prop> = ({ car, wheel, setWheel, dataIndex }) => {
  const token = Cookies.get('jwt');

  const emptyWheels = Array(24).fill({
    pressure: 0,
    temperature: 0,
    wheel_position: 0,
  });
  const [wheelsData, setWheelsData] = useState<wheelData[]>(emptyWheels);

  useEffect(() => {
    if (car != null) {
      axios
        .get(`https://algalar.ru:8080/sensors?car_id=${car.auto.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((r) =>
          r.data.length != 0
            ? setWheelsData(r.data)
            : setWheelsData(emptyWheels)
        );
    }
  }, [car]);
  return (
    <>
      {' '}
      {dataIndex === -1 ? (
        <div />
      ) : (
        <div
          style={{
            height: '40vh',
            position: 'absolute',
            left: '5%',
            top: '10%',
          }}
        >
          <Image
            style={{ width: '15vw', height: '45vh', position: 'relative' }}
            src={SchemeImage}
            alt={''}
          />
          <Title> Текущее состояние </Title>
          <PressureWrapper> Рекомендованное давление </PressureWrapper>
          <PressureNumber> 5.5 </PressureNumber>
          <WheelsWrapper>
            {Array.from({ length: car.auto.axleCount }, (_, index) => (
              <div className={`relative mt-2 h-[15%]`} key={index}>
                <div className="relative left-[40%] font-roboto font-regular text-[1.1vw]">
                  {' '}
                  Bar{' '}
                </div>
                <div className="relative left-[41%] top-[-15%] font-roboto font-regular text-[1.1vw]">
                  {' '}
                  °C{' '}
                </div>
              </div>
            ))}
            {car.wheels.map((wheel1: wheel, index) => (
              <Wheel
                wheelposition={wheel1.wheelPosition}
                key={wheel1.wheelPosition}
                onClick={() => {
                  setWheel(wheel1.wheelPosition);
                }}
              >
                {wheel === wheel1.wheelPosition ? (
                  <ParamWrapperActive>
                    {' '}
                    {wheelsData[index].pressure.toFixed(1)} <br />
                    <span style={{ position: 'relative', bottom: '27%' }}>
                      {' '}
                      {wheelsData[index].temperature.toFixed(0)}{' '}
                    </span>{' '}
                  </ParamWrapperActive>
                ) : (
                  <ParamWrapper>
                    {' '}
                    {wheelsData[index].pressure.toFixed(1)} <br />
                    <span style={{ position: 'relative', bottom: '27%' }}>
                      {' '}
                      {wheelsData[index].temperature.toFixed(0)}{' '}
                    </span>{' '}
                  </ParamWrapper>
                )}
              </Wheel>
            ))}
          </WheelsWrapper>
        </div>
      )}{' '}
    </>
  );
};

export default Scheme;
