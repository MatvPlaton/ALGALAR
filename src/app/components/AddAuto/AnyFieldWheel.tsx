import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
const Wrap = styled(FormControl)`
  width: 90%;
  font-size: 1vw;
  padding: 0.5vw;
`;
interface Stats {
  number: string;
  size: string;
  ngp: string;
  model: string;
  brand: string;
  cost: string;
  tkvh: string;
  minPress: string;
  maxPress: string;
  minTemp: string;
  maxTemp: string;
}
interface ChildComponentProps {
  text: string;
  turn: boolean;
  setTurn: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  field: keyof Stats;
  wheels: Stats[];
  setWheels: React.Dispatch<React.SetStateAction<Stats[]>>;
}

const AnyField: React.FC<ChildComponentProps> = ({
  wheels,
  setWheels,
  index,
  field,
  setTurn,
  turn,
  text,
}) => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    setInputValue(wheels[index][field]);
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setWheels((prevState) =>
      prevState.map((wheel, i) =>
        i === index ? { ...wheel, [field]: event.target.value } : wheel
      )
    );
  };

  return (
    <>
      <Wrap onClick={() => setTurn(false)} variant="standard" error={turn}>
        <InputLabel
          style={{ marginLeft: '1vw', fontSize: '1vw' }}
          htmlFor="standard-adornment-password"
        >
          {text}{' '}
        </InputLabel>
        <Input
          style={{ marginLeft: '1vw', fontSize: '1vw' }}
          id="standard-adornment-password"
          value={inputValue}
          onChange={handleChange}
        />
      </Wrap>
    </>
  );
};

export default AnyField;
