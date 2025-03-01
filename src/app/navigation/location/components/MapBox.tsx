import React from 'react';
import { MapWrapper } from './styles/MapBox';
import YandexMap from './Map';
import CurrCarInfo from './CurrCarInfo';
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
      <MapWrapper>
        <YandexMap id={id} setId={setId} />
        <CurrCarInfo id={id} cars={cars} />
      </MapWrapper>
    </>
  );
};

export default MapBox;
