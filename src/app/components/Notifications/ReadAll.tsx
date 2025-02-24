import React from 'react';
import {EnterWrapper} from "./styles/Button";
import Cookie from 'js-cookie';
import axios from 'axios';

interface breakage {
    state_number: string,
    brand: string,
    breakage_type: string,
    created_at: string,
    id: string
}
interface Prop {
    active: number;
    setData:  React.Dispatch<React.SetStateAction<breakage[]>>
     
}
const ReadAll: React.FC<Prop> = ({active,setData}) => {

    const token = Cookie.get('jwt');

    const readAll = () => {

        if (!active)
            setData([])
        axios.get(`https://algalar.ru:8080/notification/list?status=new&limit=100&offset=0`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            if (!r.data)
                return
            r.data.forEach( (not : breakage) => {
                axios.put(`https://algalar.ru:8080/notification/status`, {
                    id: not.id,
                    status: "readed"
                },{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            })
        })

    }

    return (<>
        <EnterWrapper onClick={() => readAll()} isActive={true} style={{position: 'absolute', left: '71%', top: '90%'}}> ПРОЧИТАТЬ ВСЁ </EnterWrapper>
    </>)

}

export default ReadAll;