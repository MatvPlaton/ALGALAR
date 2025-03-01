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
      >
        {' '}
        {props.text}{' '}
      </InputLabel>
      <Input onChange={props.handleChange} />
    </FormControl>
  );
};

export default LoginField;
