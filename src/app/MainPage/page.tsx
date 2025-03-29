import React from 'react';
import Header from '@/app/components/MainPage/Header';
import Truck from '@/app/components/MainPage/Truck';
import Info from '@/app/components/MainPage/Info';
import Tires from '../components/MainPage/Tires';
import Footer from '../components/MainPage/Footer';
import B from '../components/MainPage/B';
const Page = () => {

  return (
    <>
      <Header />
      <B />
      <Truck />
      <Info />
      <Tires />
      <Footer />
    </>
  );
};

export default Page;
