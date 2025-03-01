import React from 'react';
import { ListWrapper } from './styles/ListBox';
import Table from './Table';
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

const MapBox: React.FC<Prop> = ({ id, setId, cars }) => {
  return (
    <>
      <ListWrapper>
        <Table cars={cars} id={id} setId={setId} />
      </ListWrapper>
    </>
  );
};

export default MapBox;
