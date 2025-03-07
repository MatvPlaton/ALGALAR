const InfoFourth = () => {
    return <div className="relative left-1/10 flex flex-row w-[24vw] h-1/2
    max-[769px]:left-4/10
    max-[481px]:absolute max-[481px]:left-4/20
    max-[481px]:w-full 
    max-[481px]:top-[200%]">
    <div className="text-[#43C5E2] font-[MontserratBold] text-[2rem]">
      
      04
    </div>
    <div className="relative flex flex-col left-1/10">
      <div className="text-white text-[2rem] font-bold font-[MontserratBold]">
        Отсутствие удаленной <br /> системы контроля
      </div>
      <div className="relative text-white text-[1.3rem] top-1/5 text-left leading-[2rem] font-[RobotoRegular]">
        
        Владелец не знает о текущем состоянии <br /> своего автопарка,
        поэтому сложно <br /> спрогнозировать расходы на техническое
        <br />
        обслуживание и ремонт
      </div>
    </div>
  </div>
}

export default InfoFourth;