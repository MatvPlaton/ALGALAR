"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import styled from "styled-components";
import { useEffect } from 'react';
const Wrap = styled(FormControl)`
    width: 90%;
    margin-bottom: 2rem;
    @media (max-width: 1000px) {
        width: 15rem;
    }   
`
interface Prop {
    userField : string;
    setField : React.Dispatch<React.SetStateAction<string>>;
    
}
const SetTimezone: React.FC<Prop> = ({userField, setField}) =>  {

    const [timezone, setTimezone] = React.useState(userField);

    const handleChange = (event: SelectChangeEvent) => {
        setTimezone(event.target.value as string);
        setField(event.target.value as string)
    };
    useEffect(() => {
        setTimezone(userField)
    }, [userField]);
    const range = Array.from({ length: 25 }, (_, i) => i - 12);

    return (
        <Wrap variant="standard">
            <InputLabel id="demo-simple-select-standard-label">Часовой пояс</InputLabel>
            <Select style={{marginBottom: '1rem'}}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={timezone}
                onChange={handleChange}
                label="timezone"
            >
                {range.map((number) => (
                    number >= 0 ?
                        (<MenuItem key={number} value={number}> (UTC+{number}:00) </MenuItem>) :
                        (<MenuItem key={number} value={number}> (UTC{number}:00) </MenuItem>)
                ))}

            </Select>
        </Wrap>
    );
}

export default SetTimezone;