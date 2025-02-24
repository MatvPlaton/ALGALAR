import React from 'react';
import {EnterWrapper} from "./styles/Button";
interface Prop {
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
}
const TableButtons: React.FC<Prop> = ({active,setActive}) => {


    return (<>
        <EnterWrapper onClick={() => setActive(0)} isActive={active == 0 ? true : false} 
        style={{position: 'absolute', left: '20%', top: '2%'}}>  НОВЫЕ </EnterWrapper>
        <EnterWrapper onClick={() => setActive(1)} isActive={active == 1 ? true : false} 
        style={{position: 'absolute', left: '50%', top: '2%'}}>  ПРОЧИТАННЫЕ </EnterWrapper>

    </>)

}

export default TableButtons;