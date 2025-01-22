import React, { useState } from 'react';
import {EnterWrapper} from "./styles/Button";
const TableButtons = () => {

    const [active,setActive] = useState(-1);

    return (<>
        <EnterWrapper onClick={() => setActive(0)} isActive={active == 0 ? true : false} style={{position: 'absolute', left: '7%', top: '10%'}}>  НОВЫЕ </EnterWrapper>
        <EnterWrapper onClick={() => setActive(1)} isActive={active == 1 ? true : false} style={{position: 'absolute', left: '20%', top: '10%'}}>  ПРОЧИТАННЫЕ </EnterWrapper>
        <EnterWrapper onClick={() => setActive(2)} isActive={active == 2 ? true : false} style={{position: 'absolute', left: '33%', top: '10%'}}>  ВСЕ </EnterWrapper>

    </>)

}

export default TableButtons;