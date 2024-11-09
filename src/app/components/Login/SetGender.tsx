"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";

const SetGender = () =>  {

    const [gender, setGender] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    return (
        <FormControl variant="standard" sx={{ m: 2, width: '124ch' }}>
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
        </FormControl>
    );
}

export default SetGender;









