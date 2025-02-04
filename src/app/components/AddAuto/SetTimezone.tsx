"use client"
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import styled from "styled-components";
import {useState} from "react";
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
const SetTimezone: React.FC<ChildComponentProps> = (({setTurn, turn, text,userField,setField }) => {

    const [inputValue, setInputValue] = useState(userField || '');

    const handleChange = (event: SelectChangeEvent<string>) => {
        const newValue = event.target.value;
        setInputValue(newValue); // Update local state
        setField(newValue); // Propagate to parent state
    };


    return (
        <Wrap onClick={() => setTurn(false)} variant="standard" error={turn}>
            <InputLabel style={{marginLeft: '1.4vw',fontSize: '1vw'}} id="demo-simple-select-standard-label">{text}</InputLabel>
            <Select
                style={{marginLeft: '1vw',fontSize: '1vw'}}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={inputValue}
                onChange={handleChange}
                label="timezone"
            >
                <MenuItem value="Грузовик">Грузовик</MenuItem>
                <MenuItem value="Самосвал">Самосвал</MenuItem>
            </Select>
        </Wrap>
    );
})

export default SetTimezone;









