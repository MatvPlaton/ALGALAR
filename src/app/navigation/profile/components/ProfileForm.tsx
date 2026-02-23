'use client'
import { useEffect, useState } from "react";
import RegistrationButton from "./RegistrationButton";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

interface User {
  email: string,
  firstName: string,
  gender: string, 
  inn: string, 
  lastName: string,
  password: string,
  phone: string, 
  timeZone: number 
}

const ProfileForm = () => {
  
    const [user, setUser] = useState<User | null>(null);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      thirdName: '',
      phone: '',
      email: '',
      inn: '',
    });
    
    useEffect(() => {
      fetch('/api/user')
        .then(response => response.json())
        .then(data => {
          setUser(data.user);
          setFormData({
            firstName: data.user?.firstName || '',
            lastName: data.user?.lastName || '',
            thirdName: data.user?.thirdName || '',
            phone: data.user?.phone || '',
            email: data.user?.email || '',
            inn: data.user?.inn || '',
          });
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return <div className='absolute w-18/25 h-39/50 left-[6.5%] top-3/25 color-[#202020] rounded-[1vw] bg-white text-[2vw]'>
        <div className='absolute h-9/10 top-1/20 left-1/50 text-[1.4vw] font-roboto font-regular'>
          <div className="relative top-[-3%]">
            Редактирование профиля
          </div>
          
          <TextField 
            className='w-9/10' 
            sx={{
              input: { fontSize: "1.2rem" },
              label: { fontSize: "1.2rem" },
              marginBottom: "1rem"
            }}
            value={formData.firstName}  
            onChange={handleChange}
            label="Имя" 
            variant="standard" 
            name="firstName"
            required
          />
          
          <TextField 
            className='w-9/10' 
            sx={{
              input: { fontSize: "1.2rem" },
              label: { fontSize: "1.2rem" },
              marginBottom: "1rem"
            }}
            value={formData.lastName}
            onChange={handleChange}
            label="Фамилия" 
            variant="standard" 
            name="lastName"
            required
          />
          
          <TextField 
            className='w-9/10' 
            sx={{
              input: { fontSize: "1.2rem" },
              label: { fontSize: "1.2rem" },
              marginBottom: "1rem"
            }}
            value={formData.thirdName}
            onChange={handleChange}
            label="Отчество" 
            variant="standard" 
            name="thirdName"
          />
          
          <TextField 
            className='w-9/10' 
            sx={{
              input: { fontSize: "1.2rem" },
              label: { fontSize: "1.2rem" },
              marginBottom: "1rem"
            }}
            value={formData.phone}
            onChange={handleChange}
            label="Телефон" 
            variant="standard" 
            name="phone"
            required
          />
          
          <TextField 
            className='w-9/10' 
            sx={{
              input: { fontSize: "1.2rem" },
              label: { fontSize: "1.2rem" },
              marginBottom: "1rem"
            }}
            value={formData.email}
            onChange={handleChange}
            label="E-mail" 
            variant="standard" 
            name="email"
            required
          />
          
          <TextField 
            className='w-9/10' 
            sx={{
              input: { fontSize: "1.2rem" },
              label: { fontSize: "1.2rem" },
              marginBottom: ""
            }}
            value={formData.inn}
            onChange={handleChange}
            label="ИНН Компании" 
            variant="standard" 
            name="inn"
            required
          />
          
          <FormControl fullWidth margin="normal">
            <InputLabel sx={{fontSize: "1.2rem", left: '-1%'}} id="position">Пол</InputLabel>
            <Select 
              className='w-9/10' 
              sx={{
                input: { fontSize: "1.2rem" },
                label: { fontSize: "1.2rem" }
              }} 
              label="Должность" 
              variant="standard" 
              name="position"
              value={user?.gender || ''}
            >
              <MenuItem value='Driver'>Водитель</MenuItem>
              <MenuItem value='Manager'>Менеджер</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel sx={{fontSize: "1.2rem", left: '-1%'}} id="timezone">Часовой Пояс</InputLabel>
            <Select 
              className='w-9/10' 
              sx={{
                input: { fontSize: "1.2rem" },
                label: { fontSize: "1.2rem" }
              }} 
              value={user?.timeZone || 0} 
              label="Часовой пояс" 
              variant="standard" 
              name="timezone"
            >
              {Array.from({ length: 25 }, (_, i) => i - 12).map((number) =>
                number >= 0 ? (
                  <MenuItem key={number} value={number}>
                    (UTC+{number}:00)
                  </MenuItem>
                ) : (
                  <MenuItem key={number} value={number}>
                    (UTC{number}:00)
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
        <RegistrationButton />
      </div>
}

export default ProfileForm;