import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {useState} from "react";
import styled from 'styled-components';
import { useEmailStore } from '@/app/redux/store';

const Wrap = styled(FormControl)`
    width: 90%;
    margin-bottom: 2rem;
    @media (max-width: 1000px) {
        width: 15rem;
    }   
`
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
            <Wrap variant="standard">
                <InputLabel htmlFor="standard-adornment-password">{text} </InputLabel>
                <Input
                    value={inputValue}          // Step 3: Set the Input value to state
                    onChange={handleChange}
                    id="standard-adornment-password"
                />
            </Wrap>
    );
})

export default AnyField;