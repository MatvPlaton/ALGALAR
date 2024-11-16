import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import {OutlinedInput} from "@mui/material";
const Wrap = styled(FormControl)`
    
    font-size: 1vw;

`
interface ChildComponentProps {
    text: string;
}
const AnyField: React.FC<ChildComponentProps> = (({text }) =>  {

    return (
        <Wrap variant="outlined">
            <InputLabel style={{fontSize: '1vw'}} htmlFor="1">{text} </InputLabel>
            <OutlinedInput style={{width: '9vw', height: '5vh', boxShadow: '0 0 1vw rgba(0, 0, 0, 0.5)', borderRadius: '1vw'}}
                id="1"
            />
        </Wrap>
    )
})

export default AnyField;