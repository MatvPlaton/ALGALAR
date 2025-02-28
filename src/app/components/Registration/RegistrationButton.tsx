import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Prop {
  email: React.RefObject<string>;
  name: React.RefObject<string>;
  secondName: React.RefObject<string>;
  gender: React.RefObject<string>;
  phone: React.RefObject<string>;
  inn: React.RefObject<string>;
  timezone: React.RefObject<string>;
  password: React.RefObject<string>;
  passwordRepeat: React.RefObject<string>;

}
const RegistrationButton: React.FC<Prop> = ({email,name,secondName,gender,phone,inn,timezone,password,passwordRepeat}) => {

  const router = useRouter();

  const Registration = () => {
    if (password.current != passwordRepeat.current) {
      console.log('Пароли не совпадают!');
      return;
    }
    axios
      .post('https://algalar.ru:8080/user', {
        'firstName': name.current,
        'lastName': secondName.current,
        'gender': gender.current,
        'phone': phone.current,
        'email': email.current,
        'timeZone': Number(timezone.current),
        'inn': inn.current,
        'password': password.current,
      })
      .then((r) => {
        console.log(r);
        if (r.status === 201) {
          console.log('success');
          router.push('/login');
        }
        if (r.status === 400) {
          console.log('wrong password or email');
        }
      });
    }
    
  return ( <button
        className="relative bg-[#5A5CA8] w-[30rem] h-[2.5rem] 
    tracking-[0.1vw] border-none shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)] rounded-[0.4rem] 
    font-[RobotoMedium] text-[white]  text-[0.9rem] left-1/20
    hover:bg-[#46478b] active:translate-y-[-5%]"
      onClick={() => Registration()}>
        
        ЗАРЕГЕСТРИРОВАТЬСЯ
      </button>  );
};

export default RegistrationButton;
