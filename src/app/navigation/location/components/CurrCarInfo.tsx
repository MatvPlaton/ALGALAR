import React, { useEffect, useState } from 'react';

interface car {
  brand: string;
  car_id: string;
  state_number: string;
  unique_id: string;
}
interface Prop {
  cars: car[];
  id: string;
}
const CurrCarInfo: React.FC<Prop> = ({ cars, id }) => {
  const selectCar = (id: string, cars: car[]) => {
    if (id === '-1') setCar(null);
    cars.forEach((car: car) => {
      if (car.car_id === id) {
        setCar(car);
        return;
      }
    });
  };
  const [car, setCar] = useState<car | null>(null);
  useEffect(() => {
    selectCar(id, cars);
  }, [id]);

  return (
    <>
      <div className="absolute border-2 border-sky-500 rounded-2xl bg-white h-[6vh] w-5/10 top-[5%] left-1/4 ">
        <div className="absolute left-[5%] text-[0.8vw] font-roboto font-regular text-[rgba(0,0,0,0.6)]">
          {' '}
          Уникальный ID{' '}
        </div>
        <div className="absolute left-[45%] text-[0.8vw] font-roboto font-regular text-[rgba(0,0,0,0.6)]">
          {' '}
          Марка Авто{' '}
        </div>
        <div className="absolute right-[8%] text-[0.8vw] font-roboto font-regular text-[rgba(0,0,0,0.6)]">
          {' '}
          Гос Номер{' '}
        </div>
        {car ? (
          <div>
            <div className="absolute w-2/10 grid place-items-center top-2/5 left-[5%] text-[1.2vw] font-roboto font-regular">
              {' '}
              {car.unique_id}{' '}
            </div>
            <div className="absolute w-2/10 grid place-items-center top-2/5 left-[43%] text-[1.2vw] font-roboto font-regular">
              {' '}
              {car.brand}{' '}
            </div>
            <div className="absolute w-3/10 grid place-items-center top-2/5 left-[70%] text-[1.2vw] font-roboto font-regular">
              {' '}
              {car.state_number}{' '}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </>
  );
};

export default CurrCarInfo;
