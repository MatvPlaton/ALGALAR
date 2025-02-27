import React from 'react';

interface Prop {
  showed: boolean;
  setShowed: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<Prop> = ({ showed, setShowed }) => {
  return (
    <>
      {' '}
      {showed ? (
        <div className=" w-full fixed bg-[rgba(0,0,0,0.6)] flex justify-center items-center h-[100%]">
          <div className="bg-[#fff] rounded-[10px] font-[RobotoRegular] text-center">
            <button
              className="relative cursor-pointer top-[-1rem] left-[52%]"
              onClick={() => setShowed(false)}
            >
              &#x00d7;
            </button>
            <h2>Неправильная почта или пароль!</h2>
          </div>
        </div>
      ) : (
        <div />
      )}{' '}
    </>
  );
};

export default Modal;
