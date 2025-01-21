"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import styled from "styled-components";
const Wrap = styled(FormControl)`
    width: 90%;
    margin-bottom: -0.2rem;
    @media (max-width: 1000px) {
        width: 15rem;
    }   
`

const SetTimezone = () =>  {

    const [timezone, setTimezone] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setTimezone(event.target.value as string);
    };


    return (
        <Wrap variant="standard">
            <InputLabel id="demo-simple-select-standard-label">Должность</InputLabel>
            <Select style={{marginBottom: '1rem'}}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={timezone}
                onChange={handleChange}
                label="timezone"
            >
                (<MenuItem key={0} value={0}> Менеджер </MenuItem>) :
                (<MenuItem key={1} value={1}> Водитель </MenuItem>)

            </Select>
        </Wrap>
    );
}

export default SetTimezone;









