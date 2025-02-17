import React from 'react';
import {ListWrapper} from "./styles/ListBox";
import Table from './Table';
interface Prop {
    id: string;
    setId: React.Dispatch<React.SetStateAction<string>> 
}

const MapBox: React.FC<Prop> = ({id, setId}) => {

    return (<>
        <ListWrapper> 
        <Table id={id} setId={setId} />
        </ListWrapper>
    </>)

}


export default MapBox;