import React from 'react';
import {MapWrapper} from "./styles/MapBox";
import YandexMap from './Map';
interface Prop {
    coordinates: [number,number];
}
const MapBox: React.FC<Prop> = ({coordinates}) => {

    return (<>
        <MapWrapper> 
        <YandexMap coordinates={coordinates} />
        </MapWrapper>
    </>)

}


export default MapBox;