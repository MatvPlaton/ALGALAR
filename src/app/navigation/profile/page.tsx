import TitleBox from './components/TitleBox';
import Menu from '../Menu';
import ProfileForm from './components/ProfileForm';

const Page = () => {
  
  return (
    <div className="bg-[#f2f3f4] h-[100vh]">
      <Menu activeField='profile'/>
      <TitleBox />
      <ProfileForm />
    </div>
  );
};

export default Page;
