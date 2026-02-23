import Image from 'next/image';
import ProfileIcon from '../../assets/MainPage/profile.svg';
import Link from 'next/link';

const NavigateButton = async () => {

  return (
    <Link
      className="absolute w-[19rem] max-[769px]:w-[31%]  max-[769px]:h-[40%] h-[35%] left-[64%] top-[25%]"
      href='/auth/login'
    >
      <button className=" h-full w-full text-white 
      bg-[#43C5E2] rounded-md text-[1.5rem]
       hover:bg-[#40b9d6] active:scale-95 active:bg-[#43C5E2]">
        <Image
          className="max-[769px]:hidden relative left-[8%] top-[10%] w-[15%] h-4/5"
          src={ProfileIcon}
          alt=""
        />
        <div className="relative max-[769px]:bottom-[10%] max-[769px]:left-[0] left-[10%] bottom-[65%]"> Личный Кабинет </div>
      </button>
    </Link>
  );
};

export default NavigateButton;
