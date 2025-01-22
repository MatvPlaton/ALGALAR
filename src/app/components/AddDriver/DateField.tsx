import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import {useEffect, useState} from "react";
import styled from 'styled-components';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";
const Wrap = styled(FormControl)`
    width: 90%;
    top: 1vw;
    border: none;
    @media (max-width: 1000px) {
        width: 15rem;
    }   
`
interface ChildComponentProps {
    text: string;
    userField : Dayjs | null;
    setField : React.Dispatch<React.SetStateAction<Dayjs | null>>;
    turn: boolean;
    setTurn : React.Dispatch<React.SetStateAction<boolean>>
}
const DateField: React.FC<ChildComponentProps> = (({turn, setTurn, setField, text, userField }) =>  {

    const [, setInputValue] = useState<Dayjs | null >(null);
    useEffect(() => {
        setInputValue(userField)
    }, [userField]);
    const handleChange = (event: Dayjs | null ) => {
        setInputValue(event);
        setField(event);
    };

    return (
        <Wrap onClick={() => setTurn(false)} variant="standard" error={turn}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    sx={{border: 'none'}}
                    label={text}
                    format="DD/MM/YYYY"
                    onChange={handleChange}
                />
            </LocalizationProvider>
        </Wrap>
    );
})

export default DateField;