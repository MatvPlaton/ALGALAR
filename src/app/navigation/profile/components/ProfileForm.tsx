'use client'
import { useState } from "react";
import { useTimeZoneStore } from '@/app/redux/store';
import AnyField from "./AnyField";
import SetRank from "./SetRank";
import SetTimezone from "./SetTimezone";
import RegistrationButton from "./RegistrationButton";
import { TextField } from "@mui/material";


const ProfileForm = () => {
  

  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [thirdName, setThirdName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inn, setInn] = useState('');
  const [timezone, setTimezone] = useState('');

  const setZone = useTimeZoneStore((state) => state.setZone);

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
                    label="Имя" 
                    variant="standard" 
                    name="name"
                    required
                  />
          <TextField 
          className='w-9/10' 
          sx={{
            input: { fontSize: "1.2rem" },
            label: { fontSize: "1.2rem" },
            marginBottom: "1rem"
          }} 
          label="Фамилия" 
          variant="standard" 
          name="secondName"
          required
        />
          <TextField 
          className='w-9/10' 
          sx={{
            input: { fontSize: "1.2rem" },
            label: { fontSize: "1.2rem" },
            marginBottom: "1rem"
          }} 
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
            marginBottom: "1rem"
          }} 
          label="ИНН Компании" 
          variant="standard" 
          name="inn"
          required
        />
          <SetRank />
          <SetTimezone userField={`${timezone}`} setField={setTimezone} />
        </div>
        <RegistrationButton
          firstName={name}
          lastName={secondName}
          gender=""
          phone={phone}
          email={email}
          inn={inn}
          timeZone={Number(timezone)}
        />
      </div>
}

export default ProfileForm;