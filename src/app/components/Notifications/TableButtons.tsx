import React, { useState } from 'react';
import {EnterWrapper} from "./styles/Button";
const TableButtons = () => {

    const [active,setActive] = useState(-1);

    return (<>
        <EnterWrapper onClick={() => setActive(0)} isActive={active == 0 ? true : false} style={{position: 'absolute', left: '7%', top: '2%'}}>  НОВЫЕ </EnterWrapper>
        <EnterWrapper onClick={() => setActive(1)} isActive={active == 1 ? true : false} style={{position: 'absolute', left: '37%', top: '2%'}}>  ПРОЧИТАННЫЕ </EnterWrapper>
        <EnterWrapper onClick={() => setActive(2)} isActive={active == 2 ? true : false} style={{position: 'absolute', left: '67%', top: '2%'}}>  ВСЕ </EnterWrapper>

    </>)

}

export default TableButtons;