'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

const SetGender = (props: {
  handleChange: (e: SelectChangeEvent) => void}) => {

  return (
    <FormControl variant="standard" className="w-9/10" sx={{marginBottom: '1vw'}}>
      <InputLabel sx={{ fontSize: '1vw' }} id="demo-simple-select-standard-label">
        Выберите пол
      </InputLabel >
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        defaultValue=""
        onChange={props.handleChange}
        label="gender"
      >
        <MenuItem value='Male'>Мужской</MenuItem>
        <MenuItem value='Female'>Женский</MenuItem>

      </Select>
    </FormControl>
  );
};

export default SetGender;
