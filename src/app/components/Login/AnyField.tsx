"use client"
import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {useState} from "react";
import { useEmailStore } from '@/app/redux/store';

interface ChildComponentProps {
    text: string;
}
const AnyField: React.FC<ChildComponentProps> = (({ text }) =>  {

    const setEmail = useEmailStore((state) => state.setEmail);
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setEmail(event.target.value)
    };

    return (
        <FormControl variant="standard" className="w-9/10">
                <InputLabel sx={{fontSize: '1vw'}} htmlFor="standard-adornment-password">{text} </InputLabel>
                <Input
                    value={inputValue}
                    onChange={handleChange}
                    id="standard-adornment-password"
                />
            </FormControl>
    );
})

export default AnyField;