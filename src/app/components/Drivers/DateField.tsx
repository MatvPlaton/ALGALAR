import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
const Wrap = styled(FormControl)`
  width: 86%;
  border: none;
  position: relative;
  @media (max-width: 1000px) {
    width: 15rem;
  }
`;
interface ChildComponentProps {
  text: string;
  userField: Dayjs | null;
}
const DateField: React.FC<ChildComponentProps> = ({ text, userField }) => {
  const [inputValue, setInputValue] = useState<Dayjs | null>(null);
  useEffect(() => {
    setInputValue(userField);
  }, [userField]);
  const handleChange = (event: Dayjs | null) => {
    setInputValue(event);
  };

  return (
    <Wrap variant="standard">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ border: 'none' }}
          label={text}
          value={inputValue}
          format="DD.MM.YYYY"
          onChange={handleChange}
          readOnly
        />
      </LocalizationProvider>
    </Wrap>
  );
};

export default DateField;
