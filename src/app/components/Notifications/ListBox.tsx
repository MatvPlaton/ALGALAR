import React from 'react';
import {ListWrapper} from "./styles/ListBox";
import Table from './Table'
import TableButtons from "./TableButtons";
import ReadAll from './ReadAll';

interface Prop {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}
const ListBox: React.FC<Prop> = ({index,setIndex}) => {

    return (
        <ListWrapper>
            <Table dataIndex={index} setDataIndex={setIndex} />
            <TableButtons />
            <ReadAll />
        </ListWrapper>
    )

}

export default ListBox;