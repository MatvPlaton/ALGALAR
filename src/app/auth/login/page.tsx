import UnderHeaderText from './components/UnderHeaderText';
import ForgotPassword from './components/ForgotPassword';
import RegistrationButton from './components/RegistrationButton';
import ClientComponents from './components/ClientComponents';
const Login = () => {
  return (
    <div
      className="absolute w-[70rem] h-[26rem] 
    left-1/2 top-3/20 flex flex-col overflow-x-hidden -translate-x-1/2"
    >
      <UnderHeaderText message="Введите данные для входа" />
      <ClientComponents />
      <ForgotPassword />
      <RegistrationButton />
    </div>
  );
};

export default Login;
