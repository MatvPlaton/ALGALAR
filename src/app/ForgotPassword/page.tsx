import Header from '@/app/components/Login/Header';
import UnderHeaderText from '@/app/components/Login/UnderHeaderText';
import AnyField from '@/app/components/Login/AnyField';
import Additional from '@/app/components/ForgotPassword/Additional';
import ReturnButton from '@/app/components/ForgotPassword/ReturnButton';
import RegistrationButton from '@/app/components/ForgotPassword/RegistrationButton';

const ForgotPassword = () => {
  return (
    <div
      className="absolute w-[70rem] h-[26rem] 
    left-1/2 top-1/20 flex flex-col overflow-x-hidden -translate-x-1/2"
    >
      <Header />
      <UnderHeaderText message="Сброс пароля" />
      <Additional />
      <div className="relative top-[14%] left-[3%] flex-col">
        <AnyField text={'E-mail'} />
      </div>
      <div className=" relative top-1/5 right-[7.7%] flex flex-row">
        <ReturnButton />
        <RegistrationButton />
      </div>
    </div>
  );
};

export default ForgotPassword;
