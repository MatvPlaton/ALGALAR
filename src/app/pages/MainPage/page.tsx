"use client"
import React from "react";
import Header from "@/app/components/MainPage/Header";
import Truck from "@/app/components/MainPage/Truck";
import Info from "@/app/components/MainPage/Info";
import Tires from "@/app/components/MainPage/Tires";
import Footer from "@/app/components/MainPage/Footer";
const Page = () => {
    return (<div>
        <Header />
        <Truck />
        <Info />
        <Tires />
        <Footer />
    </div>);
}

export default Page;