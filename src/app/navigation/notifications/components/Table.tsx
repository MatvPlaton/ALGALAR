'use client';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Cookie from 'js-cookie';
import axios from 'axios';
const Wrap = styled.th`
  font-family: RobotoRegular, sans-serif;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.9);
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
  padding: 1vw;
  text-align: center;
  font-size: 1vw;
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

interface breakage {
  state_number: string;
  brand: string;
  breakage_type: string;
  created_at: string;
  id: string;
}
interface Prop {
  active: number;
  dataIndex: string;
  setDataIndex: React.Dispatch<React.SetStateAction<string>>;
  data: breakage[];
  setData: React.Dispatch<React.SetStateAction<breakage[]>>;
}
const DataTable: React.FC<Prop> = ({
  active,
  dataIndex,
  setDataIndex,
  data,
  setData,
}) => {
  const token = Cookie.get('jwt');

  useEffect(() => {
    const status = active ? 'readed' : 'new';

    axios
      .get(
        `https://algalar.ru:8080/notification/list?status=${status}&limit=100&offset=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((r) => (r.data ? setData(r.data) : setData([])));
  }, [active, token]);

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
  return (
    <div className="absolute left-[2%] top-[15%] w-[92%] max-h-[70%] overflow-y-auto">
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
            <Wrap> Гос Номер </Wrap>
            <Wrap>Марка Авто </Wrap>
            <Wrap> Поломка </Wrap>
            <Wrap> Дата/Время </Wrap>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              style={{ cursor: 'pointer' }}
              onClick={() => setDataIndex(item.id)}
              key={item.id}
            >
              <Wrap2
                style={{
                  backgroundColor: dataIndex === item.id ? '#43C5E24A' : '',
                }}
              >
                {index + 1}
              </Wrap2>
              <Wrap3
                style={{
                  backgroundColor: dataIndex === item.id ? '#43C5E24A' : '',
                }}
              >
                {item.state_number}
              </Wrap3>
              <Wrap3
                style={{
                  backgroundColor: dataIndex === item.id ? '#43C5E24A' : '',
                }}
              >
                {item.brand}
              </Wrap3>
              <Wrap3
                style={{
                  backgroundColor: dataIndex === item.id ? '#43C5E24A' : '',
                }}
              >
                {item.breakage_type}
              </Wrap3>
              <Wrap3
                style={{
                  backgroundColor: dataIndex === item.id ? '#43C5E24A' : '',
                }}
              >
                {getUsualDate(item.created_at)}
              </Wrap3>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
