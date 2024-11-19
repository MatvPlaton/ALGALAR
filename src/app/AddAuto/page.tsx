"use client"
import React, {useState} from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import Header from "@/app/components/AddAuto/Header"
import ConfigFields from "@/app/components/AddAuto/ConfigFields"
import WheelConfig from "@/app/components/AddAuto/WheelConfig";
import SeparateWheelFields from "@/app/components/AddAuto/SeparateWheelFields";
import TempAndPressure from "@/app/components/AddAuto/TempAndPressure";
import Buttons from "@/app/components/AddAuto/Buttons";
import emptyTire from "@/app/assets/AddAuto/Rectangle 41.svg";


const AutoPark = () => {

    const [redacting, setRedacting] = useState(false)
    const [axis,setAxis] = useState(2);
    const [isChecked, setIsChecked] = useState(false);
    const [currTire, setCurrTire] = useState(-1);
    const [isDoubled,setIsDoubled] = useState(Array(6).fill(false))
    const [images, setImages] = useState(Array(24).fill(emptyTire))





    return <div style={{backgroundColor: '#D9D9D9', height: '120vh'}}>
        <ProfileMenu height={'120vh'} activeField={'Добавить авто'} />
        <Header />
        <ConfigFields />
        <WheelConfig images={images} setImages={setImages} isDoubled={isDoubled} setIsDoubled={setIsDoubled}
                     currTire={currTire} setCurrTire={setCurrTire} isChecked={isChecked} setIsChecked={setIsChecked}
                     redacting={redacting} setRedacting={setRedacting} axis={axis} setAxis={setAxis}/>
        <SeparateWheelFields redacting={redacting}/>
        <TempAndPressure redacting={redacting}/>
        <Buttons redacting={redacting} setRedacting={setRedacting} setImages={setImages} currTire={currTire}/>
    </div>
}

export default AutoPark;