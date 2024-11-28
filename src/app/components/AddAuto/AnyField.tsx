import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import {useEffect, useState} from "react";
const Wrap = styled(FormControl)`
    width: 90%;
    font-size: 1vw;
    padding: 0.5vw;
`
interface ChildComponentProps {
    text: string;
    userField : string;
    setField : React.Dispatch<React.SetStateAction<string>>;
    turn: boolean;
    setTurn : React.Dispatch<React.SetStateAction<boolean>>
}

const AnyField: React.FC<ChildComponentProps> = ({setTurn, turn, text,userField,setField}) =>  {
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        setInputValue(userField)
    }, [userField]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setField(event.target.value)
    };
    return ( <>
            <Wrap onClick={() => setTurn(false)} variant="standard" error={turn}>
                <InputLabel style={{marginLeft: '1vw',fontSize: '1vw'}} htmlFor="standard-adornment-password">{text} </InputLabel>
                <Input style={{marginLeft: '1vw',fontSize: '1vw'}}
                    id="standard-adornment-password"
                       value={inputValue}
                       onChange={handleChange}
                />
            </Wrap>
        </>
    )
}

export default AnyField;