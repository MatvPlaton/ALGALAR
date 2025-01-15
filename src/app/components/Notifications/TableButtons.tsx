import React from 'react';
import {EnterWrapper} from "./styles/Button";
const TableButtons = () => {

    return (<>
        <EnterWrapper style={{position: 'absolute', left: '7%', top: '10%'}}>  НОВЫЕ </EnterWrapper>
        <EnterWrapper style={{position: 'absolute', left: '20%', top: '10%'}}>  ПРОЧИТАННЫЕ </EnterWrapper>
        <EnterWrapper style={{position: 'absolute', left: '33%', top: '10%'}}>  ВСЕ </EnterWrapper>

    </>)

}

export default TableButtons;