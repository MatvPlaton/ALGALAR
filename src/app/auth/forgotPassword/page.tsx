import UnderHeaderText from './components/UnderHeaderText';
import AnyField from './components/AnyField';
import Additional from './components/Additional';
import ReturnButton from './components/ReturnButton';
import RegistrationButton from './components/RegistrationButton';

const ForgotPassword = () => {
  return (
    <div
      className="absolute w-[70rem] h-[26rem] 
    left-1/2 top-3/20 flex flex-col overflow-x-hidden -translate-x-1/2"
    >
      <UnderHeaderText message="Сброс пароля" />
      <Additional />
      <div className="relative top-[14%] left-[3%] flex-col">
        <AnyField text={'E-mail'} />
      </div>
      <div className=" relative top-3/10 right-[7.7%] flex flex-row">
        <ReturnButton />
        <RegistrationButton />
      </div>
    </div>
  );
};

export default ForgotPassword;
