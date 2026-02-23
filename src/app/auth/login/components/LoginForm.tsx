'use client';

import { IconButton, InputAdornment, TextField } from '@mui/material';
import Enter from './Enter';
import { useRouter } from 'next/navigation';
import Notification from './Notification';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginFormClient = () => {

  const router = useRouter();
  const [showed, setShowed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    
    
    const formData = new FormData(e.currentTarget);
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });


    if (response.ok) {
      router.push('/navigation/profile');
    } else {
      setShowed(true)
      setTimeout(() => setShowed(false), 3000);
    }
  }
  
  return (
    <form onSubmit={loginUser}>
      
      <Notification message="Неправильный логин или пароль!" visible={showed} /> 

      <div className="relative top-[44%] left-[3%] flex flex-col ">
        <TextField 
          className='w-9/10' 
          sx={{
            input: { fontSize: "1.2rem" },
            label: { fontSize: "1.2rem" },
            marginBottom: "1rem"
          }} 
          label="E-mail" 
          variant="standard" 
          name="email"
          required
        />
        <TextField 
          className='w-9/10' 
          sx={{
            input: { fontSize: "1.2rem" },
            label: { fontSize: "1.2rem" }
          }} 
          label="Пароль" 
          variant="standard" 
          type={showPassword ? 'text' : 'password'}
          name="password"
          required
         
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>
      
      <Enter />
    </form>
  );
};

export default LoginFormClient;