import styled from "styled-components";
import Background from "../../assets/background.svg"

const TruckWrapper = styled.img`
    width: 100%;
    top: 15%;
    position: absolute;
    left: 0;
    z-index: 10;

`
const TextWrapper = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    top: 15%;
    width: 50%;
    height: 54vh;
    z-index: 100;
    left: 0;
`
const BoldText = styled.div`
    color: white;
    font-weight: bold;
    text-align: left;
    position: absolute;
    left: 35%;
    top: 15%;
    font-size: 2vw;
    
`
const RegularText = styled.div`
    color: white;
    text-align: left;
    position: absolute;
    left: 35%;
    top: 45%;
    font-size: 1vw;
`

const Truck = () => {
    return <div>

        <TruckWrapper src={Background} alt=''/>
        <TextWrapper>
            <BoldText> УНИКАЛЬНАЯ <br /> ПЛАТФОРМА ALGALAR </BoldText>
            <RegularText> высокая эффективность работы и своевременное <br /> реагирование на все изменения технических показателей </RegularText>
        </TextWrapper>
    </div>
}
export default Truck;