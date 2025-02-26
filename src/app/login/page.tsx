import PasswordField from '@/app/components/Login/PasswordField'
import Header from '@/app/components/Login/Header';
import UnderHeaderText from "@/app/components/Login/UnderHeaderText";
import AnyField from "@/app/components/Login/AnyField";
import ForgotPassword from "@/app/components/Login/ForgotPassword";
import RegistrationButton from "@/app/components/Login/RegistrationButton";
import Enter from "@/app/components/Login/Enter";

const Login = () => {


    return <div className='absolute w-[70rem] h-[26rem] 
    left-1/2 top-1/20 flex flex-col overflow-x-hidden -translate-x-1/2'>
        <Header/>
        <UnderHeaderText message='Введите данные для входа'/>
        <div className='relative top-[14%] left-[3%] flex-col'>
            <AnyField text={'E-mail'}/>
            <PasswordField text={'Пароль'}/>
        </div>
        <ForgotPassword/>
        <RegistrationButton/>
        <Enter />
    </div>
    
}


export default Login;