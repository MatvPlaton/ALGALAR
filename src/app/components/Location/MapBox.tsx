import React from 'react';
import {MapWrapper} from "./styles/MapBox";
import YandexMap from './Map';
interface Prop {
    id: string;
    setId: React.Dispatch<React.SetStateAction<string>> 
    
}
const MapBox:React.FC<Prop> = ({id,setId}) => {

    return (<>
        <MapWrapper> 
        <YandexMap id={id} setId={setId} />
        </MapWrapper>
    </>)

}


export default MapBox;