'use client';
import { memo, useCallback } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

interface LoginFieldProps {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Оптимизируем Material-UI компоненты
const LoginField = memo(({ text, handleChange }: LoginFieldProps) => {
  // useCallback для обработчика
  const optimizedHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // ⏸️ Даем браузеру шанс отрисовать кадр для частых событий
    if (e.type === 'change') {
      requestAnimationFrame(() => {
        handleChange(e);
      });
    } else {
      handleChange(e);
    }
  }, [handleChange]);

  return (
    <FormControl 
      variant="standard" 
      className="w-9/10"
      sx={{ 
        mb: 2,
        '& .MuiInput-root': {
          transition: 'all 0.1s ease-in-out'
        }
      }}
    >
      <InputLabel
        sx={{ 
          fontSize: '1.2rem',
          // Оптимизация шрифтов
          fontFamily: 'var(--font-roboto), sans-serif'
        }}
      >
        {text}
      </InputLabel>
      <Input 
        onChange={optimizedHandleChange}
        // Оптимизация рендеринга
        slotProps={{
          input: {
            // Уменьшаем количество ререндеров
            onCompositionStart: undefined,
            onCompositionEnd: undefined,
          }
        }}
      />
    </FormControl>
  );
});

LoginField.displayName = 'LoginField';
export default LoginField;