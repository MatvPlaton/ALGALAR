// components/Enter.tsx
'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { loginUser } from './auth';

interface EnterProps {
  email: React.MutableRefObject<string>;
  password: React.MutableRefObject<string>;
  setShowed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Enter: React.FC<EnterProps> = ({ email, password, setShowed }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.current || !password.current) {
      setShowed(true);
      setTimeout(() => setShowed(false), 3000);
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('email', email.current);
      formData.append('password', password.current);

      const result = await loginUser(formData);

      if (result.success) {
        email.current = '';
        password.current = '';
        
        router.push('/navigation/profile');
      } else {
        setShowed(true);
        setTimeout(() => setShowed(false), 3000);
        console.error('Login failed:', result.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      setShowed(true);
      setTimeout(() => setShowed(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      className="absolute bg-[#5A5CA8] w-[4.5rem] h-[2.5rem] 
        tracking-[0.1vw] border-none shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)] 
        rounded-[0.4rem] font-roboto font-medium text-[white] text-[0.9rem] bottom-1/5 left-[93%]
        hover:bg-[#46478b] active:translate-y-[-5%] max-[961px]:left-[24rem] max-[449px]:left-[1%] max-[449px]:bottom-1/20
        disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleLogin}
      disabled={isLoading}
    >
      {isLoading ? '...' : 'ВХОД'}
    </button>
  );
};

export default Enter;