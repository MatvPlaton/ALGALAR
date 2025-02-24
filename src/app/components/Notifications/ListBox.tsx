import React, {useState} from 'react';
import {ListWrapper} from "./styles/ListBox";
import Table from './Table'
import TableButtons from "./TableButtons";
import ReadAll from './ReadAll';

interface breakage {
    state_number: string,
    brand: string,
    breakage_type: string,
    created_at: string,
    id: string
}

interface Prop {
    index: string;
    setIndex: React.Dispatch<React.SetStateAction<string>>;
}
const ListBox: React.FC<Prop> = ({index,setIndex}) => {

    const [active,setActive] = useState(0);
    const [data,setData] = useState<breakage[]>([]);

    return (
        <ListWrapper>
            <Table data={data} setData={setData} active={active} dataIndex={index} setDataIndex={setIndex} />
            <TableButtons active={active} setActive={setActive} />
            <ReadAll setData={setData} active={active} />
        </ListWrapper>
    )

}

export default ListBox;