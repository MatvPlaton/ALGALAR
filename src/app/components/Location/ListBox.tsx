import React from 'react';
import {ListWrapper} from "./styles/ListBox";
import Table from './Table';
interface car {
    brand: string
    car_id: string
    state_number: string
    unique_id: string
}
interface Prop {
    id: string;
    setId: React.Dispatch<React.SetStateAction<string>>
    setId1: React.Dispatch<React.SetStateAction<string>>
    cars: car[]; 
}

const MapBox: React.FC<Prop> = ({setId1,id, setId, cars}) => {

    return (<>
        <ListWrapper> 
        <Table setId1={setId1} cars={cars} id={id} setId={setId} />
        </ListWrapper>
    </>)

}


export default MapBox;