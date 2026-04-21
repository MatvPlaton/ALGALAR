import React, { useState } from 'react';
import { ConfigFieldsWrapper, CopyButton } from './styles/ConfigFields';
import AnyField from './AnyField';
import SetTimezone from './SetTimezone';
import { HeaderText2 } from './styles/ConfigFields';
import WheelConfig from './WheelConfig';
import Notification from './Notification';
import { useInnStore } from '@/app/redux/store';

interface tireCont {
  full: boolean;
  img: string;
}
interface Props {
  axis: number;
  setAxis: React.Dispatch<React.SetStateAction<number>>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  currTire: number;
  isDoubled: boolean[];
  setIsDoubled: React.Dispatch<React.SetStateAction<boolean[]>>;
  images: tireCont[];
  setCarId: React.Dispatch<React.SetStateAction<string>>;
  switchImage: (index: number) => void;
  carId: string;
}

const ConfigFields: React.FC<Props> = ({
  carId,
  switchImage,
  setCarId,
  axis,
  setAxis,
  isChecked,
  setIsChecked,
  images,
  currTire,
  isDoubled,
  setIsDoubled,
}) => {
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');
  const [mark, setMark] = useState('');
  const [type, setType] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  const [idTurn, setIdTurn] = useState(false);
  const [numberTurn, setNumberTurn] = useState(false);
  const [markTurn, setMarkTurn] = useState(false);
  const [typeTurn, setTypeTurn] = useState(false);
  const [uniqueIdTurn, setUniqueIdTurn] = useState(false);

  const allFieldsFilled = [id, number, mark, type, uniqueId].every((f) => f.trim() !== '');
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const inn = useInnStore((state) => state.inn);

  const send = async () => {
    let flag = false;
    if (id === '') { setIdTurn(true); flag = true; }
    if (number === '') { setNumberTurn(true); flag = true; }
    if (mark === '') { setMarkTurn(true); flag = true; }
    if (type === '') { setTypeTurn(true); flag = true; }
    if (uniqueId === '') { setUniqueIdTurn(true); flag = true; }
    if (flag) return;

    try {
      const response = await fetch('/api/autocreate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyInn: inn,
          deviceNumber: id,
          uniqueId,
          AutoType: type,
          stateNumber: number,
          brand: mark,
          axleCount: axis,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setNotificationVisible(true);
        setTimeout(() => setNotificationVisible(false), 3000);
        setCarId(data.data?.id ?? '');
      }
    } catch (error) {
      console.error('Autocreate error:', error);
    }
  };

  return (
    <>
      <ConfigFieldsWrapper>
        <HeaderText2> Выберите конфигурацию колёсной системы</HeaderText2>
        <AnyField setTurn={setIdTurn} turn={idTurn} setField={setId} userField={id} text={'ID устройства*'} />
        <AnyField setTurn={setNumberTurn} turn={numberTurn} setField={setNumber} userField={number} text={'ГОС Номер*'} />
        <AnyField setTurn={setMarkTurn} turn={markTurn} setField={setMark} userField={mark} text={'Марка Авто*'} />
        <SetTimezone setTurn={setTypeTurn} turn={typeTurn} setField={setType} userField={type} text={'Тип Авто*'} />
        <AnyField setTurn={setUniqueIdTurn} turn={uniqueIdTurn} setField={setUniqueId} userField={uniqueId} text={'Уникальный ID*'} />
        <WheelConfig
          carId={carId}
          switchImage={switchImage}
          images={images}
          isDoubled={isDoubled}
          setIsDoubled={setIsDoubled}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          axis={axis}
          setAxis={setAxis}
          currTire={currTire}
        />
        <CopyButton fields={allFieldsFilled} onClick={() => send()} top={axis}>
          {' '}СОХРАНИТЬ{' '}
        </CopyButton>
      </ConfigFieldsWrapper>
      <Notification message={'Машина отправлена!'} visible={isNotificationVisible} />
    </>
  );
};

export default ConfigFields;
