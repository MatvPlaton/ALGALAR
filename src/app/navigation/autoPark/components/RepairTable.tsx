'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cookie from 'js-cookie';

const Wrap = styled.th`
  font-family: RobotoRegular, sans-serif;
  font-weight: normal;
  color: #1e1e1e;
  padding: 0.75vw;
  font-size: 1vw;
`;
const Wrap1 = styled(Wrap)`
  border-right: 0.1vw solid rgba(0, 0, 0, 0.5);
  font-size: 1vw;
`;
const Wrap2 = styled.td`
  border-right: 0.1vw solid rgba(0, 0, 0, 0.5);
  font-family: RobotoRegular, sans-serif;
  font-weight: normal;
  border-top: 0.1vw solid rgba(0, 0, 0, 0.5);
  border-bottom: 0.1vw solid rgba(0, 0, 0, 0.5);
  padding: 0.8vw;
  text-align: center;
  font-size: 1vw;
  color: black;
`;
const Wrap3 = styled.td`
  font-family: RobotoRegular, sans-serif;
  font-weight: normal;
  border-top: 0.1vw solid rgba(0, 0, 0, 0.5);
  border-bottom: 0.1vw solid rgba(0, 0, 0, 0.5);
  padding: 1vw;
  text-align: center;
  font-size: 1vw;
`;
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
interface breakage {
  datetime: string;
  description: string;
  driver_name: string;
  id: string;
  stateNumber: string;
  type: string;
}

interface Prop {
  car: car;
}
const DataTable: React.FC<Prop> = ({ car }) => {
  const [breakages, setBreakages] = useState<breakage[]>([]);
  const token = Cookie.get('jwt');
  const [dataIndex, setIndex] = useState(0);

  const getUsualDate = (ISO: string) => {
    const date = new Date(ISO);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}.${month}.${year}/${hours}:${minutes}:${seconds}`;

    return formattedDate;
  };

  useEffect(() => {
    if (car) {
      axios
        .get(`https://algalar.ru:8080/breakage/list?car_id=${car.auto.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((r) => {
          setBreakages(r.data);
        });
    }
  }, [car]);
  return (
    <div className="absolute left-[3.5%] top-[70%] w-[90%] max-h-[25%] overflow-y-auto">
      <table style={{ width: '95%', borderCollapse: 'collapse' }}>
        <thead
          style={{
            position: 'sticky',
            top: 0,
            zIndex: '2',
            background: 'white',
          }}
        >
          <tr>
            <Wrap1>№</Wrap1>
            <Wrap> Тип Поломки</Wrap>
            <Wrap>Дата/Время</Wrap>
            <Wrap>Водитель </Wrap>
            <Wrap>Описание</Wrap>
          </tr>
        </thead>
        <tbody>
          {breakages.map((item, index) => (
            <tr
              style={{ cursor: 'pointer' }}
              onClick={() => setIndex(index)}
              key={index}
            >
              <Wrap2
                style={{
                  backgroundColor: dataIndex === index ? '#43C5E24A' : '',
                }}
              >
                {' '}
                {index + 1}{' '}
              </Wrap2>
              <Wrap3
                style={{
                  backgroundColor: dataIndex === index ? '#43C5E24A' : '',
                }}
              >
                {' '}
                {item.type}{' '}
              </Wrap3>
              <Wrap3
                style={{
                  backgroundColor: dataIndex === index ? '#43C5E24A' : '',
                }}
              >
                {' '}
                {getUsualDate(item.datetime)}{' '}
              </Wrap3>
              <Wrap3
                style={{
                  backgroundColor: dataIndex === index ? '#43C5E24A' : '',
                }}
              >
                {' '}
                {item.driver_name}{' '}
              </Wrap3>
              <Wrap3
                style={{
                  backgroundColor: dataIndex === index ? '#43C5E24A' : '',
                }}
              >
                {' '}
                {item.description}{' '}
              </Wrap3>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
