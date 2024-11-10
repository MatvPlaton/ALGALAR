import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {useState} from "react";

interface ChildComponentProps {
    onDataChange: (data: string) => void;
    text: string;// Type for the callback function prop
}
const AnyField: React.FC<ChildComponentProps> = (({ onDataChange, text }) =>  {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onDataChange(event.target.value);
    };

    return (
            <FormControl sx={{ m: 2, width: '124ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">{text} </InputLabel>
                <Input
                    value={inputValue}          // Step 3: Set the Input value to state
                    onChange={handleChange}
                    id="standard-adornment-password"
                />
            </FormControl>
    );
})

export default AnyField;