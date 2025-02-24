import React from 'react';
import {EnterWrapper} from "./styles/Button";
import axios from 'axios';
import Cookie from 'js-cookie'
interface breakage {
    description: string,
    driver_name: string,
    location: [number,number],
    created_at: string
}
interface Prop {
    id: string;
    setId: React.Dispatch<React.SetStateAction<string>>;
    setBreakage: React.Dispatch<React.SetStateAction<breakage | null>>;
}
const ReadCurr: React.FC<Prop> = ({id, setId, setBreakage}) => {

    const token = Cookie.get('jwt')
    const updateStatus = () => {

            axios.put(`https://algalar.ru:8080/notification/status`, {
                id: id,
                status: "readed"
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(r => console.log(r))
            setBreakage(null);
            setId('');
        }

    return (<>
        <EnterWrapper onClick={() => updateStatus()} isActive={true} style={{position: 'absolute', left: '70%', top: '90%'}}> ПРОЧИТАТЬ </EnterWrapper>
    </>)

}

export default ReadCurr;