import Header from '@/app/components/Login/Header';
import UnderHeaderText from '@/app/components/Login/UnderHeaderText';
import ForgotPassword from '@/app/components/Login/ForgotPassword';
import RegistrationButton from '@/app/components/Login/RegistrationButton';
import ClientComponents from '../components/Login/ClientComponents';
const Login = () => {
  return (
    <div
      className="absolute w-[70rem] h-[26rem] 
    left-1/2 top-1/20 flex flex-col overflow-x-hidden -translate-x-1/2"
    >
      <Header />
      <UnderHeaderText message="Введите данные для входа" />
      <ClientComponents />
      <ForgotPassword />
      <RegistrationButton />
    </div>
  );
};

export default Login;
