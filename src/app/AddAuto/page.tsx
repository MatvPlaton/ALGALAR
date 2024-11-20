"use client"
import React, {useState} from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import Header from "@/app/components/AddAuto/Header"
import ConfigFields from "@/app/components/AddAuto/ConfigFields"
import SeparateWheelFields from "@/app/components/AddAuto/SeparateWheelFields";
import Buttons from "@/app/components/AddAuto/Buttons";
import emptyTire from "@/app/assets/AddAuto/Rectangle 41.svg";


const AutoPark = () => {

    const [redacting, setRedacting] = useState(false)
    const [axis,setAxis] = useState(2);
    const [isChecked, setIsChecked] = useState(false);
    const [currTire, setCurrTire] = useState(-1);
    const [isDoubled,setIsDoubled] = useState(Array(6).fill(false))
    const [images, setImages] = useState(Array(24).fill(emptyTire))





    return <div style={{backgroundColor: '#D9D9D9', height: '100vh'}}>
        <ProfileMenu height={'100vh'} activeField={'Добавить авто'} />
        <Header />

        <ConfigFields images={images} setImages={setImages} isDoubled={isDoubled} setIsDoubled={setIsDoubled}
                      setCurrTire={setCurrTire} isChecked={isChecked} setIsChecked={setIsChecked}
                      setRedacting={setRedacting} axis={axis} setAxis={setAxis} currTire={currTire}/>


        <SeparateWheelFields redacting={redacting}/>
        <Buttons redacting={redacting} setRedacting={setRedacting} setImages={setImages} currTire={currTire}/>
    </div>
}

export default AutoPark;