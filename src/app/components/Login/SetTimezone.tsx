"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";

const SetTimezone = () =>  {

    const [timezone, setTimezone] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setTimezone(event.target.value as string);
    };

    const range = Array.from({ length: 25 }, (_, i) => i - 12);

    return (
        <FormControl variant="standard" sx={{ m: 2, width: '124ch' }}>
            <InputLabel id="demo-simple-select-standard-label">Часовой пояс</InputLabel>
            <Select
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
        </FormControl>
    );
}

export default SetTimezone;









