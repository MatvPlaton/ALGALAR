"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {Select, SelectChangeEvent} from "@mui/material";
import styled from "styled-components";
const Wrap = styled(FormControl)`
    width: 90%;
    height: 15%;
    margin-bottom: 1vw;
    font-size: 1vw;
    padding: 0.5vw;

`
interface ChildComponentProps {
    text: string;
}
const SetTimezone: React.FC<ChildComponentProps> = (({text }) => {

    const [timezone, setTimezone] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setTimezone(event.target.value as string);
    };


    return (
        <Wrap variant="standard">
            <InputLabel style={{padding: '0.5vw',fontSize: '1vw'}} id="demo-simple-select-standard-label">{text}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={timezone}
                onChange={handleChange}
                label="timezone"
            >
            </Select>
        </Wrap>
    );
})

export default SetTimezone;









