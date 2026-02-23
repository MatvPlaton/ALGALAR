'use client'
import RegistrationButton from './RegistrationButton';
import TextField from '@mui/material/TextField';
import ReturnButton from './ReturnButton';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/navigation';

const RegistrationForm = () => {

  const router = useRouter();
  
  const regUser = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    
    
    const formData = new FormData(e.currentTarget);
    
    if (formData.get('password') !== formData.get('passwordRepeat')) {
      console.log('Пароли не совпадают!')
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'firstName': formData.get('name'),
        'lastName': formData.get('secondName'),
        'gender': formData.get('gender'),
        'phone': formData.get('phone'),
        'email': formData.get('email'),
        'timeZone': Number(formData.get('timezone')),
        'inn': formData.get('inn'),
        'password': formData.get('password'),
      }),
    });


    if (response.ok) {
      router.push('/auth/login');
    }
  }

  return <form onSubmit={regUser}>
    <div className="relative top-[2rem] left-[3%] flex flex-col gap-3 ">

      <TextField className='w-9/10' sx={{
    input: { fontSize: "1.2rem" },
    label: { fontSize: "1.2rem" },
  }} label="E-mail" variant="standard" name="email"/>

      <TextField className='w-9/10' sx={{
    input: { fontSize: "1.2rem" },
    label: { fontSize: "1.2rem" }
  }} label="Имя" variant="standard" name="name"/>

      <TextField className='w-9/10' sx={{
    input: { fontSize: "1.2rem" },
    label: { fontSize: "1.2rem" }
  }} label="Фамилия" variant="standard" name="secondName"/>

      <FormControl fullWidth margin="normal">
      <InputLabel sx={{fontSize: "1.2rem", left: '-1%'}} id="gender">Пол</InputLabel>

      <Select className='w-9/10' sx={{
    input: { fontSize: "1.2rem" },
    label: { fontSize: "1.2rem" }
  }} label="Пол" variant="standard" name="gender">
    <MenuItem value='Male'>Мужской</MenuItem>
    <MenuItem value='Female'>Женский</MenuItem>
     </Select>
     </FormControl>

  <TextField className='w-9/10' sx={{
    input: { fontSize: "1.2rem" },
    label: { fontSize: "1.2rem" }
  }} label="Телефон" variant="standard" name="phone"/>

  <TextField className='w-9/10' sx={{
    input: { fontSize: "1.2rem" },
    label: { fontSize: "1.2rem" }
  }} label="ИНН" variant="standard" name="inn"/>

  <TextField className='w-9/10' sx={{
    input: { fontSize: "1.2rem" },
    label: { fontSize: "1.2rem" }
  }} label="Пароль" variant="standard" name="password"/>

  <TextField className='w-9/10' sx={{
    input: { fontSize: "1.2rem" },
    label: { fontSize: "1.2rem" }
  }} label="Повторите Пароль" variant="standard" name="passwordRepeat"/>

<FormControl fullWidth margin="normal">
      <InputLabel sx={{fontSize: "1.2rem", left: '-1%'}} id="timezone">Часовой Пояс</InputLabel>

      <Select className='w-9/10' sx={{
    input: { fontSize: "1.2rem" },
    label: { fontSize: "1.2rem" }
  }} label="Часовой пояс" variant="standard" name="timezone">
    {Array.from({ length: 25 }, (_, i) => i - 12).map((number) =>
              number >= 0 ? (
                <MenuItem key={number} value={number}>
                  {' '}
                  (UTC+{number}:00){' '}
                </MenuItem>
              ) : (
                <MenuItem key={number} value={number}>
                  {' '}
                  (UTC{number}:00){' '}
                </MenuItem>
              )
            )}
     </Select>
     </FormControl>

      </div>
      <div className='relative top-15 w-full flex flex-row gap-4 justify-end'>  
      <ReturnButton />
      <RegistrationButton />
      </div>
      </form>  
};

export default RegistrationForm;
