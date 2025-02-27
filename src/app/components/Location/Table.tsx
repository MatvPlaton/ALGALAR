'use client';
import styled from 'styled-components';

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
const Title = styled.div`
  position: absolute;
  left: 3.5%;
  top: 2%;
  font-family: RobotoRegular, sans-serif;
  font-size: 1.3vw;
`;
interface car {
  brand: string;
  car_id: string;
  state_number: string;
  unique_id: string;
}

interface Prop {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  cars: car[];
}
const DataTable: React.FC<Prop> = ({ id, setId, cars }) => {
  return (
    <>
      <Title> Информация по Авто </Title>
      <div className="absolute left-[3.5%] top-[10.5%] w-[95%] max-h-[85%] overflow-y-auto">
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
              <Wrap> Уникальный ID </Wrap>
              <Wrap>Марка Авто </Wrap>
              <Wrap>Гос Номер </Wrap>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr
                style={{ cursor: 'pointer' }}
                onClick={() => setId(car.car_id)}
                key={car.unique_id}
              >
                <Wrap2
                  style={{
                    backgroundColor: id === car.car_id ? '#43C5E24A' : '',
                  }}
                >
                  {index + 1}
                </Wrap2>
                <Wrap3
                  style={{
                    backgroundColor: id === car.car_id ? '#43C5E24A' : '',
                  }}
                >
                  {car.unique_id}
                </Wrap3>
                <Wrap3
                  style={{
                    backgroundColor: id === car.car_id ? '#43C5E24A' : '',
                  }}
                >
                  {car.brand}
                </Wrap3>
                <Wrap3
                  style={{
                    backgroundColor: id === car.car_id ? '#43C5E24A' : '',
                  }}
                >
                  {car.state_number}
                </Wrap3>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
