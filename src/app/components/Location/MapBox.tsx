import React from 'react';
import {MapWrapper} from "./styles/MapBox";
import YandexMap from './Map';
import CurrCarInfo from './CurrCarInfo';
interface car {
    brand: string
    car_id: string
    state_number: string
    unique_id: string
}
interface Prop {
    id: string;
    setId: React.Dispatch<React.SetStateAction<string>>;
    id1 : string;
    setId1: React.Dispatch<React.SetStateAction<string>>;
    cars: car[];    
}

const MapBox:React.FC<Prop> = ({id,id1,setId1,setId,cars}) => {


    return (<>
        <MapWrapper> 
        <YandexMap id1={id1} setId1={setId1} setId={setId} />
        <CurrCarInfo id={id} cars={cars}/>
        </MapWrapper>
    </>)

}


export default MapBox;