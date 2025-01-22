import React from 'react';
import {InfoWrapper} from "./styles/InfoBox";
import Map from './Map';
import Information from "./Information";
import ReadCurr from "./ReadCurr";

interface Prop {
    currIndex: number;
}
const InfoBox: React.FC<Prop> = ({currIndex}) => {


    return (<>
        <InfoWrapper> 
            <Information />
            {currIndex != -1 ? <>
            <Map coordinates={[55.731272, 37.447198]}/> </> :
            <> </>}
            <ReadCurr /> 
        </InfoWrapper>
    </>)

}

export default InfoBox;