import styled from 'styled-components';

export const ConfigFieldsWrapper = styled.div`
    position: absolute;
    top : 12%;
    left: 6.5%;
    width: 50%;
    height: 85%;
    margin-bottom: 10vw;
    flex-direction: column;
    background-color: white;
    overflow-y: scroll;
    border-radius: 1vw;
`
export const HeaderText2 = styled.div`
    color: black;
    position: relative;
    font-family: RobotoRegular, sans-serif;
    font-size: 1.4vw;
    display: flex;
    align-items: flex-end;
    padding: 0.5vw;
    left: 2%;
    width: 70%;
`
interface props {
    top?: number;
    fields?: boolean;
}
const chooseTop = (axis? : number) => {
    switch (axis) {
        case 2:
            return '95%';
        case 3:
            return '115%';
        case 4:
            return '134%';
        case 5:
            return '154%';
        case 6:
            return '174%';
        default:
            return '0'    
    }
}
export const CopyButton = styled.button<props>`
    font-family: RobotoMedium,sans-serif;
    color: white;
    background-color: ${(props) => props.fields ? '#5A5CA8' : '#a9a9a9'};
    letter-spacing: 0.07vw;
    border: none;
    border-radius: 0.4vw;
    font-size: 0.9vw;
    position: absolute;
    top: ${({ top }) => chooseTop(top)};
    left: 82%;
    width: 8vw;
    height: 5%;
    box-shadow: 0 0.5vw 0.5vw 0 rgba(0,0,0,0.2), 0 0.01vw 0.5vw 0 rgba(0,0,0,0.19);
    &:hover {
        background-color: ${(props) => props.fields ? '#46478b' : '#a9a9a9'};
    }
    &:active {
        transform: translateY(-5%);
    }
     
`