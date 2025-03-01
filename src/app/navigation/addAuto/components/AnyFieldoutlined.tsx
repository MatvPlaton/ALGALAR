import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import { OutlinedInput } from '@mui/material';
import { useEffect, useState } from 'react';
const Wrap = styled(FormControl)`
  font-size: 1vw;
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
  text,
}) => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    setInputValue(wheels[index][field]);
  }, [wheels[index][field]]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setWheels((prevState) =>
      prevState.map((wheel, i) =>
        i === index ? { ...wheel, [field]: event.target.value } : wheel
      )
    );
  };
  return (
    <Wrap variant="outlined">
      <InputLabel style={{ fontSize: '1vw' }} htmlFor="1">
        {text}{' '}
      </InputLabel>
      <OutlinedInput
        style={{
          width: '9vw',
          height: '5vh',
          boxShadow: '0 0 1vw rgba(0, 0, 0, 0.5)',
          borderRadius: '1vw',
        }}
        id="1"
        value={inputValue}
        onChange={handleChange}
      />
    </Wrap>
  );
};

export default AnyField;
