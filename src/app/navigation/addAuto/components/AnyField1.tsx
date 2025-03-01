import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
const Wrap = styled(FormControl)`
  width: 90%;
  margin-bottom: 0.5vw;
  font-size: 1vw;
  padding: 0.5vw;
`;
interface ChildComponentProps {
  text: string;
}
const AnyField: React.FC<ChildComponentProps> = ({ text }) => {
  return (
    <Wrap variant="standard">
      <InputLabel
        style={{ padding: '0.5vw', fontSize: '1vw' }}
        htmlFor="standard-adornment-password"
      >
        {text}{' '}
      </InputLabel>
      <Input id="standard-adornment-password" />
    </Wrap>
  );
};

export default AnyField;
