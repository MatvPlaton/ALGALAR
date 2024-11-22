import * as React from 'react';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {useState} from "react";
import styled from 'styled-components';
import {setEmail} from "@/app/redux/emailSlice";
import {useDispatch} from "react-redux";
const Wrap = styled(FormControl)`
    width: 90%;
    @media (max-width: 1000px) {
        width: 15rem;
    }   
`
interface ChildComponentProps {
    text: string;
}
const AnyField: React.FC<ChildComponentProps> = (({ text }) =>  {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(text);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        dispatch(setEmail(event.target.value))
    };

    return (
            <Wrap variant="standard">
                <InputLabel htmlFor="standard-adornment-password">{text} </InputLabel>
                <Input style={{marginBottom: '1rem'}}
                    value={inputValue}          // Step 3: Set the Input value to state
                    onChange={handleChange}
                    id="standard-adornment-password"
                />
            </Wrap>
    );
})

export default AnyField;