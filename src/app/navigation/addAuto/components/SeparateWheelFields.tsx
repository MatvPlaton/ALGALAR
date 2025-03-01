import React, { useState } from 'react';
import {
  FieldsWrapper,
  Header,
  SeparateWheelFieldsWrapper,
  Wrapper,
} from './styles/SeparateWheelFields';
import TempAndPressure from './TempAndPressure';
import Buttons from './Buttons';
import axios from 'axios';
import { useAuthStore } from '@/app/redux/store';
import filledTire from '@/app/assets/AddAuto/Rectangle 36.svg';
import AnyFieldWheel from './AnyFieldWheel';

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
interface tireCont {
  full: boolean;
  img: string;
}
interface Prop {
  redacting: boolean;
  setImages: React.Dispatch<React.SetStateAction<tireCont[]>>;
  currTire: number;
  setRedacting: React.Dispatch<React.SetStateAction<boolean>>;
  carId: string;
}
let currStats = {
  number: '',
  size: '',
  ngp: '',
  model: '',
  brand: '',
  cost: '',
  tkvh: '',
  minPress: '',
  maxPress: '',
  minTemp: '',
  maxTemp: '',
};

const SeparateWheelFields: React.FC<Prop> = ({
  carId,
  currTire,
  setImages,
  setRedacting,
  redacting,
}) => {
  const [numberTurn, setNumberTurn] = useState(false);
  const [sizeTurn, setSizeTurn] = useState(false);
  const [ngpTurn, setNgpTurn] = useState(false);
  const [modelTurn, setModelTurn] = useState(false);
  const [brandTurn, setBrandTurn] = useState(false);
  const [costTurn, setCostTurn] = useState(false);
  const [tkvhTurn, setTkvhTurn] = useState(false);

  const [wheels, setWheels] = useState<Stats[]>(
    Array(24).fill({
      number: '',
      size: '',
      ngp: '',
      model: '',
      brand: '',
      cost: '',
      tkvh: '',
      minPress: '',
      minTemp: '',
      maxPress: '',
      maxTemp: '',
    })
  );
  const token = useAuthStore((state) => state.token);

  const send = () => {
    let flag = false;

    if (wheels[currTire]['number'] === '') {
      setNumberTurn(true);
      flag = true;
    }
    if (wheels[currTire]['size'] === '') {
      setSizeTurn(true);
      flag = true;
    }
    if (wheels[currTire]['ngp'] === '') {
      setNgpTurn(true);
      flag = true;
    }
    if (wheels[currTire]['tkvh'] === '') {
      setTkvhTurn(true);
      flag = true;
    }
    if (wheels[currTire]['brand'] === '') {
      setBrandTurn(true);
      flag = true;
    }
    if (wheels[currTire]['cost'] === '') {
      setCostTurn(true);
      flag = true;
    }
    if (wheels[currTire]['model'] === '') {
      setModelTurn(true);
      flag = true;
    }
    if (flag) return;

    setRedacting(false);

    setImages((prevImage) =>
      prevImage.map((item, i) =>
        i === currTire ? { full: true, img: filledTire } : item
      )
    );

    currStats = wheels[currTire];
    axios
      .post(
        'https://algalar.ru:8080/wheels',
        {
          AutoId: carId,
          axleNumber: Math.floor(currTire / 4) + 1,
          wheelPosition: currTire,
          sensorNumber: wheels[currTire]['number'],
          tireSize: Number(wheels[currTire]['size']),
          tireCost: Number(wheels[currTire]['cost']),
          tireBrand: wheels[currTire]['brand'],
          tireModel: wheels[currTire]['model'],
          minPressure: Number(wheels[currTire]['minPress']),
          mileage: 1,
          maxPressure: Number(wheels[currTire]['maxPress']),
          minTemperature: Number(wheels[currTire]['minTemp']),
          maxTemperature: Number(wheels[currTire]['maxTemp']),
          ngp: Number(wheels[currTire]['ngp']),
          tkvh: Number(wheels[currTire]['tkvh']),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((r) => console.log(r));
    currStats.number = '';
  };
  const copy = () => {
    setWheels((prevState) =>
      prevState.map((wheel, i) => (i === currTire ? currStats : wheel))
    );
  };
  return (
    <>
      {' '}
      {redacting ? (
        <>
          <Wrapper>
            <Header> Настройка колеса </Header>
            <FieldsWrapper>
              <SeparateWheelFieldsWrapper>
                <AnyFieldWheel
                  wheels={wheels}
                  setWheels={setWheels}
                  field={'number'}
                  index={currTire}
                  turn={numberTurn}
                  setTurn={setNumberTurn}
                  text={'Номер датчика*'}
                />
                <AnyFieldWheel
                  wheels={wheels}
                  setWheels={setWheels}
                  field={'size'}
                  index={currTire}
                  turn={sizeTurn}
                  setTurn={setSizeTurn}
                  text={'Размер шины*'}
                />
                <AnyFieldWheel
                  wheels={wheels}
                  setWheels={setWheels}
                  field={'ngp'}
                  index={currTire}
                  turn={ngpTurn}
                  setTurn={setNgpTurn}
                  text={'НГП*'}
                />
                <AnyFieldWheel
                  wheels={wheels}
                  setWheels={setWheels}
                  field={'model'}
                  index={currTire}
                  turn={modelTurn}
                  setTurn={setModelTurn}
                  text={'Модель шины*'}
                />
              </SeparateWheelFieldsWrapper>
              <SeparateWheelFieldsWrapper>
                <AnyFieldWheel
                  wheels={wheels}
                  setWheels={setWheels}
                  field={'brand'}
                  index={currTire}
                  turn={brandTurn}
                  setTurn={setBrandTurn}
                  text={'Бренд шины*'}
                />
                <AnyFieldWheel
                  wheels={wheels}
                  setWheels={setWheels}
                  field={'cost'}
                  index={currTire}
                  turn={costTurn}
                  setTurn={setCostTurn}
                  text={'Стоимость шины(тыс. руб.)*'}
                />
                <AnyFieldWheel
                  wheels={wheels}
                  setWheels={setWheels}
                  field={'tkvh'}
                  index={currTire}
                  turn={tkvhTurn}
                  setTurn={setTkvhTurn}
                  text={'ТКВЧ*'}
                />
              </SeparateWheelFieldsWrapper>
            </FieldsWrapper>

            <TempAndPressure
              wheels={wheels}
              currTire={currTire}
              setWheels={setWheels}
              redacting={redacting}
            />
          </Wrapper>
          <Buttons copy={copy} send={send} redacting={redacting} />
        </>
      ) : (
        <div />
      )}{' '}
    </>
  );
};

export default SeparateWheelFields;
