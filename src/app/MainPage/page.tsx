import React from 'react';
import Header from '@/app/components/MainPage/Header';
import Truck from '@/app/components/MainPage/Truck';
import Info from '@/app/components/MainPage/Info';
import Tires from '../components/MainPage/Tires';
import Footer from '../components/MainPage/Footer';

const Page = () => {

  return (
    <>
      <Header />
      <Truck />
      <Info />
      <Tires />
      <Footer />
    </>
  );
};

export default Page;
