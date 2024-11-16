import React from "react";
import Image from "next/image";
import {
    WheelConfigWrapper,
    AxisNumber,
    SingleAxis,
    AxisBlockWrapper,
    CheckBoxWrapper1,CheckBoxWrapper2
} from "@/app/components/AddAuto/styles/WheelConfig";
import minus from '../../assets/AddAuto/minus-circle.svg'
import plus from '../../assets/AddAuto/plus.svg'
import emptyTire from '../../assets/AddAuto/Rectangle 41.svg'
import redactTire from '../../assets/AddAuto/Frame 3.svg'

import {useState} from "react";
const WheelConfig = () => {


    const [axis,SetAxis] = useState(2);
    const [isChecked, setIsChecked] = useState(false);
    const [currTire, SetCurrTire] = useState(-1);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const [images, SetImages] =
        useState([emptyTire,emptyTire,emptyTire,emptyTire,emptyTire])

    const switchImage = (index : number) => {
        SetCurrTire(index)
        SetImages((prevImage) =>
            prevImage.map((item, i) => i === index && currTire != index ? redactTire : item)
        );
    }

    return <WheelConfigWrapper>
        <AxisNumber> Осей : &emsp; {axis}
        <Image onClick={() => SetAxis(axis === 2 ? axis : axis - 1)}
               style={{width: '1.3vw', height: '2.6vh', position: 'relative', left: '5%',top: '0.3%'}} src={minus} alt={''} />
        <Image onClick={() => SetAxis(axis === 6 ? axis : axis + 1)}
               style={{width: '1.3vw', height: '2.6vh', position: 'relative', left: '10%',top: '0.3%'}} src={plus} alt={''} />
            <div style={{position: 'relative', left: '55%'}}> Спаренная ошиновка </div>
        </AxisNumber>
        <AxisBlockWrapper>
            <SingleAxis>
                <Image onClick={() => switchImage(0)} key={1} style={{width: '3.4vw', height: '14.5vh'}} src={images[0]} alt={''}/>
                <Image onClick={() => switchImage(1)} key= {2} style={{width: '3.4vw', height: '14.5vh', position: 'relative', left: '41%'}} src={images[1]}
                       alt={''}/>

                <CheckBoxWrapper1 type={"checkbox"} checked={isChecked} onChange={toggleCheckbox} />

            </SingleAxis>
            <SingleAxis>
                <Image onClick={() => switchImage(2)} key={3} style={{width: '3.4vw', height: '14.5vh'}} src={images[2]} alt={''}/>
                <Image onClick={() => switchImage(3)} key={4} style={{width: '3.4vw',height: '14.5vh', position: 'relative', left: '41%'}} src={images[3]} alt={''} />
                <CheckBoxWrapper1 type={"checkbox"} checked={isChecked} onChange={toggleCheckbox} />

            </SingleAxis>
            {Array.from({ length: axis-2 }, (_, index) => (
                <SingleAxis key={index}>
                    <Image style={{width: '3.4vw',height: '14.5vh'}} src={emptyTire} alt={''} />
                    <Image style={{width: '3.4vw',height: '14.5vh', position: 'relative', left: '41.8%'}} src={emptyTire} alt={''} />

                    <Image style={{width: '3.4vw',height: '14.5vh', position: 'relative', left: '51%'}} src={emptyTire} alt={''} />
                    <Image style={{width: '3.4vw',height: '14.5vh', position: 'relative', left: '-121%'}} src={emptyTire} alt={''} />
                    <CheckBoxWrapper2 type={"checkbox"} checked={isChecked} onChange={toggleCheckbox} />

                </SingleAxis>
            ))}

        </AxisBlockWrapper>
    </WheelConfigWrapper>
}

export default WheelConfig;