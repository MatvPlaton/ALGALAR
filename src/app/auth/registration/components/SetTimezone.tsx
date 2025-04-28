'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

const SetTimezone = (props: {
  handleChange: (e: SelectChangeEvent) => void}) => {

  const range = Array.from({ length: 25 }, (_, i) => i - 12);

  return (
    <FormControl variant="standard" className="w-9/10" sx={{marginBottom: '1vw'}}>
      <InputLabel sx={{ fontSize: '1.2rem' }} id="demo-simple-select-standard-label">
        Часовой пояс
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        defaultValue=""
        onChange={props.handleChange}
        label="timezone"
      >
        {range.map((number) =>
          number >= 0 ? (
            <MenuItem key={number} value={number}>
              {' '}
              (UTC+{number}:00){' '}
            </MenuItem>
          ) : (
            <MenuItem key={number} value={number}>
              {' '}
              (UTC{number}:00){' '}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};

export default SetTimezone;
