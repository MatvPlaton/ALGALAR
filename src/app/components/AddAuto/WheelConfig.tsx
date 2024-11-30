import React from "react";
import Image from "next/image";
import {
    WheelConfigWrapper,
    AxisNumber,
    SingleAxis,
    AxisBlockWrapper,
    CheckBoxWrapper1
} from "@/app/components/AddAuto/styles/WheelConfig";
import minus from '../../assets/AddAuto/minus-circle.svg'
import plus from '../../assets/AddAuto/plus.svg'
import redactTire from '../../assets/AddAuto/Frame 3.svg'
import emptyTire from "@/app/assets/AddAuto/Rectangle 41.svg";
import axis1 from '../../assets/AddAuto/Axis.svg';
import beginAxis from '../../assets/AddAuto/Axis3.svg'
import endAxis from '../../assets/AddAuto/Axis3End.svg'

interface Props {
    setRedacting: React.Dispatch<React.SetStateAction<boolean>>;
    axis : number;
    setAxis:  React.Dispatch<React.SetStateAction<number>>;
    isChecked : boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    currTire : number;
    setCurrTire : React.Dispatch<React.SetStateAction<number>>;
    isDoubled : boolean[];
    setIsDoubled : React.Dispatch<React.SetStateAction<boolean[]>>;
    images : string[];
    setImages : React.Dispatch<React.SetStateAction<string[]>>;
}
const WheelConfig: React.FC<Props> = ({setRedacting,axis,
                                          setAxis,isChecked,setIsChecked,
                                      images,setImages,setCurrTire, isDoubled, setIsDoubled}) => {



    const switchAxis = (index : number) => {
        setIsChecked(!isChecked);
        setIsDoubled((prevStates) =>
            prevStates.map((item, i) => i === index ? !item : item))

    }

    const switchImage = (index : number) => {
        console.log(index)
        setCurrTire(index)
        setRedacting(true)
        setImages((prevImage) =>
            prevImage.map((item, i) => i === index  ? redactTire : item === redactTire ? emptyTire : item)
        );
    }


    const ImageComponent = (props: { index: number, length: number }) => {
        if (props.index === 0) {
            return <Image style={{width: '8vw',height: '8vw',position: 'relative', top: '25%',left: '0.45%'}} src={beginAxis} alt='' />;
        } else if (props.index === props.length - 1) {
            return <Image style={{width: '8vw',height: '8vw',position: 'relative', top: '-25%',left: '-0.01%'}} src={endAxis} alt='' />;
        } else {
            return <Image style={{width: '8vw',height: '14vw',position: 'relative', top: '-25%',left: '0.3%'}} src={axis1} alt='' />;
        }
    };
    return <WheelConfigWrapper>
        <AxisNumber> Осей : &emsp; {axis}
        <Image onClick={() => setAxis(axis === 2 ? axis : axis - 1)}
               style={{width: '1.3vw', height: '2.6vh', position: 'relative', left: '5%',top: '0.3%'}} src={minus} alt={''} />
        <Image onClick={() => setAxis(axis === 6 ? axis : axis + 1)}
               style={{width: '1.3vw', height: '2.6vh', position: 'relative', left: '10%',top: '0.3%'}} src={plus} alt={''} />
            <div style={{position: 'relative', left: '43%'}}> Спаренная ошиновка </div>
        </AxisNumber>
        <AxisBlockWrapper>

            {Array.from({ length: axis}, (_, index) => (
                <SingleAxis key={index}>
                    <CheckBoxWrapper1 type={"checkbox"} onChange={() => switchAxis(index)} />

                    {!isDoubled[index] ? <>
                        <Image onClick={() => switchImage(4*index + 1)} style={{width: '3.4vw', height: '14.5vh'}} src={images[4*index + 1]} alt={''}/>
                        <ImageComponent length={axis} index={index} />

                        <Image onClick={() => switchImage(4*index + 2)} style={{width: '3.4vw', height: '14.5vh', position: 'relative', left: '1%'}} src={images[4*index + 2]}
                               alt={''}/> </> : <>

                        <Image onClick={() => switchImage(4*index + 1)} style={{width: '3.4vw', height: '14.5vh'}} src={images[4*index + 1]} alt={''}/>
                        <Image onClick={() => switchImage(4*index)} style={{width: '3.4vw', height: '14.5vh', position: 'relative', left: '-41%'}} src={images[4*index]}
                               alt={''}/>
                        <div style={{position: 'relative', left: '-15%'}}> <ImageComponent length={axis} index={index} /> </div>

                        <Image onClick={() => switchImage(4*index + 2)} style={{width: '3.4vw', height: '14.5vh', position: 'relative', left: '-14%'}} src={images[4*index + 2]}
                               alt={''}/>

                        <Image onClick={() => switchImage(4*index + 3)} style={{width: '3.4vw', height: '14.5vh', position: 'relative', left: '-8%'}} src={images[4*index + 3]}
                               alt={''}/>
                    </>}
                </SingleAxis>
            ))}


        </AxisBlockWrapper>

    </WheelConfigWrapper>
}

export default WheelConfig;