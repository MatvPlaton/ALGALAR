import React, {useState} from "react";
import Image from "next/image";
import {
    WheelConfigWrapper,
    AxisNumber,
    SingleAxis,
    AxisBlockWrapper,
    CheckBoxWrapper1, DoubleWrapper, FourWrapper
} from "@/app/components/AddAuto/styles/WheelConfig";
import minus from '../../assets/AddAuto/minus-circle.svg'
import plus from '../../assets/AddAuto/plus.svg'
import axis1 from '../../assets/AddAuto/Axis.svg';
import beginAxis from '../../assets/AddAuto/Axis3.svg'
import endAxis from '../../assets/AddAuto/Axis3End.svg'
import Notification from "@/app/components/AddAuto/Notification";

interface tireCont {
    full : boolean;
    img: string;
}
interface Props {
    axis : number;
    setAxis:  React.Dispatch<React.SetStateAction<number>>;
    isChecked : boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    currTire : number;
    isDoubled : boolean[];
    setIsDoubled : React.Dispatch<React.SetStateAction<boolean[]>>;
    images : tireCont[];
    switchImage: (index : number) => void;
    carId: string;
}
const WheelConfig: React.FC<Props> = ({carId, switchImage,axis,
                                          setAxis,isChecked,setIsChecked,
                                      images, isDoubled, setIsDoubled}) => {



    const switchAxis = (index : number) => {
        setIsChecked(!isChecked);
        setIsDoubled((prevStates) =>
            prevStates.map((item, i) => i === index ? !item : item))

    }




    const ImageComponent = (props: { index: number, length: number }) => {
        if (props.index === 0) {
            return <Image style={{width: '8vw',height: '8vw',position: 'absolute', left: '40%', top: '20%'}} src={beginAxis} alt='' />;
        } else if (props.index === props.length - 1) {
            return <Image style={{width: '8vw',height: '8vw',position: 'absolute', left: '39.7%', top: '-40%'}} src={endAxis} alt='' />;
        } else {
            return <Image style={{width: '8vw',height: '14vw',position: 'absolute', left: '40%', top: '-40%'}} src={axis1} alt='' />;
        }
    };

    const [isNotificationVisible, setNotificationVisible] = useState(false);

    const EditTire = (index: number) => {
        if (carId === '') {
            setNotificationVisible(true);
            setTimeout(() => {
                setNotificationVisible(false);
            }, 3000);
            console.log('error')
            return;
        }
        switchImage(index)
    }
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

                    {!isDoubled[index] ? <DoubleWrapper>
                        <Image onClick={() => EditTire(4*index + 1)}
                               style={{position: 'absolute',left: '23%', width: '3.4vw', height: '14.5vh'}} src={images[4*index + 1].img} alt={''}/>

                        <ImageComponent length={axis} index={index} />

                        <Image onClick={() => EditTire(4*index + 2)}
                               style={{position: 'absolute',left: '75%',width: '3.4vw', height: '14.5vh'}} src={images[4*index + 2].img}
                               alt={''}/>
                    </DoubleWrapper> :


                        <FourWrapper>

                        <Image onClick={() => EditTire(4*index + 1)}
                               style={{position: 'absolute',left: '23%', width: '3.4vw', height: '14.5vh'}} src={images[4*index + 1].img} alt={''}/>
                        <Image onClick={() => EditTire(4*index)}
                               style={{position: 'absolute',left: '3%',width: '3.4vw', height: '14.5vh'}} src={images[4*index].img}
                               alt={''}/>

                        <ImageComponent length={axis} index={index} />

                        <Image onClick={() => EditTire(4*index + 2)}
                               style={{position: 'absolute',left: '75%',width: '3.4vw', height: '14.5vh'}} src={images[4*index + 2].img}
                               alt={''}/>

                        <Image onClick={() => EditTire(4*index + 3)}
                               style={{position: 'absolute',left: '95%',width: '3.4vw', height: '14.5vh'}} src={images[4*index + 3].img}
                               alt={''}/>
                        </FourWrapper>}
                </SingleAxis>
            ))}


        </AxisBlockWrapper>
        <Notification message={'Пожалуйста, сохраните машину до редактирования колеса'} visible={isNotificationVisible}/>

    </WheelConfigWrapper>
}

export default WheelConfig;