const RegistrationButton = () => {
  return (
    <button
      className="relative bg-[#5A5CA8] w-[14rem] h-[2.5rem]
        tracking-[0.1vw] border-none shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)] rounded-[0.4rem]
        font-roboto font-medium text-[white] text-[0.9rem]
        hover:bg-[#46478b] active:translate-y-[-5%]"
      type="submit"
    >
      ЗАРЕГЕСТРИРОВАТЬСЯ
    </button>
  );
};

export default RegistrationButton;