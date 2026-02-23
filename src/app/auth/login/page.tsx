import UnderHeaderText from './components/UnderHeaderText';
import ForgotPassword from './components/ForgotPassword';
import RegistrationButton from './components/RegistrationButton';
import LoginForm from './components/LoginForm';
const Login = async() => {

    return (
    <div
      className="absolute w-[70rem] h-[26rem] 
    left-1/2 top-3/20 flex flex-col overflow-x-hidden -translate-x-1/2
    max-[1121px]:w-full max-[1121px]:top-5/20"
    >
      <UnderHeaderText message="Введите данные для входа" />
      <LoginForm />
      <ForgotPassword />
      <RegistrationButton />
    </div>
  );
};

export default Login;
