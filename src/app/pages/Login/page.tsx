"use client"
import PasswordField from '@/app/components/Login/PasswordField'
import Header from '@/app/components/Login/Header';
import UnderHeaderText from "@/app/components/Login/UnderHeaderText";
import Email from "@/app/components/Login/Email";
import ForgotPassword from "@/app/components/Login/ForgotPassword";
import Registration from "@/app/components/Login/Registration";
import Enter from "@/app/components/Login/Enter";
const Login = () => {
    return <div>
        <Header />
        <UnderHeaderText />
        <Email />
        <PasswordField />
        <ForgotPassword />
        <Registration />
        <Enter />
    </div>
}

export default Login;