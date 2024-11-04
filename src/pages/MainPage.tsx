import Header from "../components/MainPage/Header.tsx";
import Truck from "../components/MainPage/Truck.tsx";
import Info from "../components/MainPage/Info.tsx";
import Tires from "../components/MainPage/Tires.tsx";
import Footer from "../components/MainPage/Footer.tsx";
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