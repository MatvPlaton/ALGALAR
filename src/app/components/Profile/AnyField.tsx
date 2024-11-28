import * as React from 'react';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {useEffect, useState} from "react";
import styled from 'styled-components';
const Wrap = styled(FormControl)`
    width: 90%;
    @media (max-width: 1000px) {
        width: 15rem;
    }   
`
interface ChildComponentProps {
    text: string;
    userField : string;
}
const AnyField: React.FC<ChildComponentProps> = (({ text, userField }) =>  {

    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        setInputValue(userField)
    }, [userField]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
            <Wrap variant="standard">
                <InputLabel htmlFor="standard-adornment-password"> {text} </InputLabel>
                <Input style={{marginBottom: '1rem'}}
                    value={inputValue}          // Step 3: Set the Input value to state
                    onChange={handleChange}
                    id="standard-adornment-password"
                />
            </Wrap>
    );
})

export default AnyField;