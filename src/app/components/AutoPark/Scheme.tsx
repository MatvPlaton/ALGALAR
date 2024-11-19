import React from 'react';
import Image from 'next/image'
import SchemeImage from '../../assets/AutoPark/Background (1)-cropped.svg'

const Scheme = () => {
    return <Image style={{position: 'absolute', left: '50%', top: '15%'}} src={SchemeImage} alt={''} />
}

export default Scheme;