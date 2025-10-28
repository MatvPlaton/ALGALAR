const InfoThird= () => {
    return <div className="relative flex flex-row w-[24vw] h-1/2
    max-[481px]:absolute max-[481px]:left-4/20
    max-[481px]:w-full 
    max-[481px]:top-[40%]">
    <div className="text-[#43C5E2] font-montserrat font-bold text-[2rem]">
      
      03
    </div>
    <div className="relative flex flex-col left-1/10">
      <div className="text-white text-[2rem] font-montserrat font-bold">
        
        Нет актуальных данных <br /> для принятия решения
      </div>
      <div className="relative text-white text-[1.3rem] top-1/5 text-left leading-[2rem] font-roboto font-regular">
        
        Выбор бренда автошин основывается на <br /> обещаниях продавца,
        а не на реальной <br />
        статистике использования
      </div>
    </div>
  </div>
}

export default InfoThird;