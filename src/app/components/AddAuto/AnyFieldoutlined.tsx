import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import {OutlinedInput} from "@mui/material";
import {useEffect, useState} from "react";
const Wrap = styled(FormControl)`
    
    font-size: 1vw;

`
interface ChildComponentProps {
    text: string;
    userField : string;
    setField : React.Dispatch<React.SetStateAction<string>>;
}
const AnyField: React.FC<ChildComponentProps> = (({userField, setField, text }) =>  {
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        setInputValue(userField)
    }, [userField]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setField(event.target.value)
    };
    return (
        <Wrap variant="outlined">
            <InputLabel style={{fontSize: '1vw'}} htmlFor="1">{text} </InputLabel>
            <OutlinedInput style={{width: '9vw', height: '5vh', boxShadow: '0 0 1vw rgba(0, 0, 0, 0.5)', borderRadius: '1vw'}}
                id="1" value={inputValue}  onChange={handleChange}


            />
        </Wrap>
    )
})

export default AnyField;