import React from 'react';
import Image from 'next/image'
import SchemeImage from '../../assets/AutoPark/Background (1)-cropped.svg'

interface Prop {
    dataIndex: number;
}
const Scheme: React.FC<Prop> = ({dataIndex}) => {
    return <> {dataIndex === -1 ? <div /> : <Image style={{position: 'absolute', left: '50%', top: '15%'}} src={SchemeImage} alt={''} />} </>
}

export default Scheme;