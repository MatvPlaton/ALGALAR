'use client';
import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const LoginField = (props: {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <FormControl variant="standard" className="w-9/10">
      <InputLabel
        sx={{ fontSize: '1vw' }}
        htmlFor="standard-adornment-password"
      >
        {' '}
        {props.text}{' '}
      </InputLabel>
      <Input onChange={props.handleChange} id="standard-adornment-password" />
    </FormControl>
  );
};

export default LoginField;
