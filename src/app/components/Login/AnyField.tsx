"use client"
import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const AnyField = (props: {text: string}) =>  {


    return (
            <FormControl sx={{ m: 2, width: '124ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">{props.text} </InputLabel>
                <Input
                    id="standard-adornment-password"
                />
            </FormControl>
    );
}

export default AnyField;