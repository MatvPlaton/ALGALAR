"use client"
import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';

const EmailWrapper = styled.div`
    position: absolute;
    top: 20%;
    left: 1%;
`
const Email = () =>  {


    return (

        <EmailWrapper>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">E-mail</InputLabel>
                <Input
                    id="standard-adornment-password"
                />
            </FormControl>
        </EmailWrapper>
    );
}

export default Email;