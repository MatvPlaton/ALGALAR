import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import {useEffect, useState} from "react";
import styled from 'styled-components';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";
const Wrap = styled(FormControl)`
    width: 86%;
    top: 1vw;
    border: none;
    position: absolute;
    @media (max-width: 1000px) {
        width: 15rem;
    }   
`
interface ChildComponentProps {
    text: string;
    userField : Dayjs | null;
}
const DateField: React.FC<ChildComponentProps> = (({ text, userField }) =>  {

    const [, setInputValue] = useState<Dayjs | null >(null);
    useEffect(() => {
        setInputValue(userField)
    }, [userField]);
    const handleChange = (event: Dayjs | null ) => {
        setInputValue(event);
    };

    return (
        <Wrap variant="standard">
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