'use client';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginpasswordField = (props: { text: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl className="w-9/10 relative top-1/5" variant="standard">
      <InputLabel
        sx={{ fontSize: '1vw' }}
        htmlFor="standard-adornment-password"
      >
        {props.text}
      </InputLabel>
      <Input
        id="standard-adornment-password"
       
        onChange={props.handleChange}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? 'hide the password' : 'display the password'
              }
              onClick={handleClickShowPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default LoginpasswordField;
