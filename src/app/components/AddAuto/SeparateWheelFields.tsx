import React, {useState} from "react";
import {FieldsWrapper, Header, SeparateWheelFieldsWrapper, Wrapper} from './styles/SeparateWheelFields';
import AnyField from "@/app/components/AddAuto/AnyField";
import TempAndPressure from "@/app/components/AddAuto/TempAndPressure";
import Buttons from "@/app/components/AddAuto/Buttons";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import filledTire from "@/app/assets/AddAuto/Rectangle 36.svg";
interface Prop {
    redacting: boolean;
    setImages : React.Dispatch<React.SetStateAction<string[]>>;
    currTire : number;
    setRedacting : React.Dispatch<React.SetStateAction<boolean>>;
    carId : string;
}
const currStats  = {

    number : '',
    size : '',
    ngp : '',
    model : '',
    brand : '',
    cost : '',
    tkvh : '',
    minPress : '',
    maxPress : '',
    minTemp : '',
    maxTemp : '',
}
const SeparateWheelFields: React.FC<Prop> = ({carId, currTire, setImages, setRedacting, redacting}) => {

    const [number, setNumber] = useState('');
    const [size, setSize] = useState('');
    const [ngp, setNgp] = useState('');
    const [model,setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [cost, setCost] = useState('');
    const [tkvh, setTkvh] = useState('');

    const [minPress, setMinPress] = useState('');
    const [maxPress, setMaxPress] = useState('');
    const [minTemp, setMinTemp] = useState('');
    const [maxTemp, setMaxTemp] = useState('');


    const [numberTurn, setNumberTurn] = useState(false);
    const [sizeTurn, setSizeTurn] = useState(false);
    const [ngpTurn, setNgpTurn] = useState(false);
    const [modelTurn,setModelTurn] = useState(false);
    const [brandTurn, setBrandTurn] = useState(false);
    const [costTurn, setCostTurn] = useState(false);
    const [tkvhTurn, setTkvhTurn] = useState(false);
    

    const token = useSelector((state: RootState) => state.auth.token);

    const send  = () => {

        let flag = false;

        if (number === '') { setNumberTurn(true); flag = true }
        if (size === '') { setSizeTurn(true); flag = true }
        if (ngp === '') { setNgpTurn(true); flag = true }
        if (tkvh === '') { setTkvhTurn(true); flag = true }
        if (brand === '') { setBrandTurn(true); flag = true }
        if (cost === '') { setCostTurn(true); flag = true }
        if (model === '') { setModelTurn(true); flag = true }
        if (flag) return;

        setRedacting(false)

        setImages((prevImage) =>
            prevImage.map((item, i) => i === currTire ? filledTire : item))

        
        console.log(carId)
        console.log(Math.floor(currTire / 4) + 1)
        console.log(currTire + 1)
        console.log(number)
        console.log(size)
        console.log(Number(cost))
        console.log(brand)
        console.log(model)
        console.log(Number(minPress))
        console.log(Number(maxPress))
        console.log(Number(minTemp))
        console.log(Number(maxTemp))
        console.log(Number(ngp))
        console.log(Number(tkvh))

        currStats.number = number;
        currStats.size = size;
        currStats.brand = brand;
        currStats.cost = cost;
        currStats.model = model;
        currStats.ngp = ngp;
        currStats.tkvh = tkvh;
        currStats.size = size;
        currStats.minTemp = minTemp;
        currStats.minPress = minPress;
        currStats.maxPress = maxPress;
        currStats.maxTemp = maxTemp;
        console.log(currStats.number)

        setNumber('');
        setSize('');
        setNgp('');
        setModel('');
        setBrand('');
        setCost('');
        setTkvh('');
        setMinPress('');
        setMaxPress('');
        setMinTemp('');
        setMaxTemp('');
        
        axios.post('https://algalar.ru:8080/wheels', {

            "AutoId": carId,
            "axleNumber": Math.floor(currTire / 4) + 1,
            "wheelPosition": currTire,
            "sensorNumber": number,
            "tireSize": Number(size),
            "tireCost": Number(cost),
            "tireBrand": brand,
            "tireModel": model,
            "minPressure": Number(minPress),
            "mileage": 1,
            "maxPressure": Number(maxPress),
            "minTemperature": Number(minTemp),
            "maxTemperature": Number(maxTemp),
            "ngp": Number(ngp),
            "tkvh": Number(tkvh)

        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => console.log(r))
    }
    const copy = () => {
        setNumber(currStats.number);
        setSize(currStats.size);
        setNgp(currStats.ngp);
        setModel(currStats.model);
        setBrand(currStats.brand);
        setCost(currStats.cost);
        setTkvh(currStats.tkvh);
        setMinPress(currStats.minPress);
        setMaxPress(currStats.maxPress);
        setMinTemp(currStats.minTemp);
        setMaxTemp(currStats.maxTemp);
    }
    return <> {redacting ? <>
        <Wrapper>
        <Header> Настройка колеса </Header>
        <FieldsWrapper>
        <SeparateWheelFieldsWrapper>
        <AnyField userField={number} setField={setNumber} turn={numberTurn} setTurn={setNumberTurn} text={'Номер датчика*'} />
        <AnyField userField={size} setField={setSize} turn={sizeTurn} setTurn={setSizeTurn} text={'Размер шины*'} />
            <AnyField userField={ngp} setField={setNgp} turn={ngpTurn} setTurn={setNgpTurn} text={'НГП*'} />
            <AnyField userField={model} setField={setModel} turn={modelTurn} setTurn={setModelTurn} text={'Модель шины*'} />

        </SeparateWheelFieldsWrapper>
        <SeparateWheelFieldsWrapper>
            <AnyField userField={brand} setField={setBrand} turn={brandTurn} setTurn={setBrandTurn} text={'Бренд шины*'} />
            <AnyField userField={cost} setField={setCost} turn={costTurn} setTurn={setCostTurn} text={'Стоимость шины(тыс. руб.)*'} />
            <AnyField userField={tkvh} setField={setTkvh} turn={tkvhTurn} setTurn={setTkvhTurn} text={'ТКВЧ*'} />
        </SeparateWheelFieldsWrapper>
        </FieldsWrapper>
            <TempAndPressure minPress={minPress} setMinPress={setMinPress} maxPress={maxPress} setMaxPress={setMaxPress}
                             minTemp={minTemp} setMinTemp={setMinTemp} maxTemp={maxTemp} setMaxTemp={setMaxTemp}
                             redacting={redacting} />

        </Wrapper>
        <Buttons copy={copy} send={send} redacting={redacting} />
        </> : <div />} </>
}

export default SeparateWheelFields;