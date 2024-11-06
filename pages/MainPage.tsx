"use client"
import React from "react";
import Header from "../components/MainPage/Header";
import Truck from "../components/MainPage/Truck";
import Info from "../components/MainPage/Info";
import Tires from "../components/MainPage/Tires";
import Footer from "../components/MainPage/Footer";
const MainPage = () => {
    return (<div>
        <Header />
        <Truck />
        <Info />
        <Tires />
        <Footer />
    </div>);
}

export default MainPage;