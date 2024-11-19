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

interface Props {
    redacting: boolean;
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
const WheelConfig: React.FC<Props> = ({redacting,setRedacting,axis,
                                          setAxis,isChecked,setIsChecked,
                                      images,setImages,setCurrTire, isDoubled, setIsDoubled}) => {



    const switchAxis = (index : number) => {
        setIsChecked(!isChecked);
        setIsDoubled((prevStates) =>
            prevStates.map((item, i) => i === index ? !item : item))

    }
    // class wheelSetting {
    //     private SensorNumber: number;
    //     private TireBrand: string;
    //     private TireSize: number;
    //     private TireCost: number;
    //     private TireModel: string;
    //     constructor(SensorNumber : number,TireBrand: string, TireSize: number,TireCost: number, TireModel: string) {
    //
    //         this.SensorNumber = SensorNumber;
    //         this.TireBrand = TireBrand;
    //         this.TireSize = TireSize;
    //         this.TireCost = TireCost;
    //         this.TireModel = TireModel;
    //     }
    // }
    const switchImage = (index : number) => {
        if (redacting) return;

        setCurrTire(index)
        setRedacting(true)
        setImages((prevImage) =>
            prevImage.map((item, i) => i === index ? redactTire : item)
        );
    }

    return <WheelConfigWrapper>
        <AxisNumber> Осей : &emsp; {axis}
        <Image onClick={() => setAxis(axis === 2 ? axis : axis - 1)}
               style={{width: '1.3vw', height: '2.6vh', position: 'relative', left: '5%',top: '0.3%'}} src={minus} alt={''} />
        <Image onClick={() => setAxis(axis === 6 ? axis : axis + 1)}
               style={{width: '1.3vw', height: '2.6vh', position: 'relative', left: '10%',top: '0.3%'}} src={plus} alt={''} />
            <div style={{position: 'relative', left: '45%'}}> Спаренная ошиновка </div>
        </AxisNumber>
        <AxisBlockWrapper>

            {Array.from({ length: axis}, (_, index) => (
                <SingleAxis key={index}>
                    <CheckBoxWrapper1 type={"checkbox"} onChange={() => switchAxis(index)} />

                    {!isDoubled[index] ? <>
                        <Image onClick={() => switchImage(4*index + 1)} key={4*index + 1} style={{width: '3.4vw', height: '14.5vh'}} src={images[4*index + 1]} alt={''}/>
                        <Image onClick={() => switchImage(4*index + 3)} key= {4*index + 3} style={{width: '3.4vw', height: '14.5vh', position: 'relative', left: '41%'}} src={images[4*index + 3]}
                               alt={''}/> </> : <>
                        <Image onClick={() => switchImage(4*index)} style={{width: '3.4vw',height: '14.5vh'}} src={images[4*index]} alt={''} />
                        <Image onClick={() => switchImage(4*index + 1)} style={{width: '3.4vw',height: '14.5vh', position: 'relative', left: '41.8%'}} src={images[4*index + 1]} alt={''} />

                        <Image onClick={() => switchImage(4*index + 2)} style={{width: '3.4vw',height: '14.5vh', position: 'relative', left: '51%'}} src={images[4*index + 2]} alt={''} />
                        <Image onClick={() => switchImage(4*index + 3)} style={{width: '3.4vw',height: '14.5vh', position: 'relative', left: '-121%'}} src={images[4*index + 3]} alt={''} />
                    </>}
                </SingleAxis>
            ))}

        </AxisBlockWrapper>
    </WheelConfigWrapper>
}

export default WheelConfig;