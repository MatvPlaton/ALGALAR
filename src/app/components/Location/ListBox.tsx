import React from 'react';
import {ListWrapper} from "./styles/ListBox";
import Table from './Table';
interface Prop {
    dataIndex: number;
    setDataIndex: React.Dispatch<React.SetStateAction<number>> 
}

const MapBox: React.FC<Prop> = ({dataIndex, setDataIndex}) => {

    return (<>
        <ListWrapper> 
        <Table dataIndex={dataIndex} setDataIndex={setDataIndex} />
        </ListWrapper>
    </>)

}


export default MapBox;