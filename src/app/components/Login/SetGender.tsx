"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import styled from "styled-components";
const Wrap = styled(FormControl)`
    width: 90%;
    margin-bottom: 2rem;
    left: -1.5%;
    @media (max-width: 1000px) {
        width: 15rem;
        left: -3.5%;

    }   
`
const SetGender = () =>  {

    const [gender, setGender] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    return (
        <Wrap variant="standard" sx={{ m: 2, width: '124ch' }}>
            <InputLabel id="demo-simple-select-standard-label">Выберите пол</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={gender}
                onChange={handleChange}
                label="gender"
            >
                <MenuItem value={1}>Мужской</MenuItem>
                <MenuItem value={2}>Женский</MenuItem>
            </Select>
        </Wrap>
    );
}

export default SetGender;









