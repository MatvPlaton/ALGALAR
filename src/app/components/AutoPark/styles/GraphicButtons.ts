import styled from 'styled-components';

export const Wrapper = styled. div`
    position: absolute;
    left: 72%;
    top: 16%;
    flex-direction: column;
`
export const TempAndPressureWrapper = styled.div`
    flex-direction: row;
    display: flex;
    font-family: RobotoMedium,sans-serif;
    letter-spacing: 0.1vw;
    font-size: 0.7vw;
    margin-bottom: 0.5vw;
    cursor: pointer;
    
`
export const TAndP = styled.div`
    
    &:hover {
        color : #5A5CA8;
    }
`
export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    position: relative;
    left: 1vw;
`

export const AddButton = styled.button`
    font-family: RobotoMedium,sans-serif;
    color: white;
    background-color: #5A5CA8;
    letter-spacing: 0.1vw;
    border: none;
    border-radius: 0.4vw;
    font-size: 0.6vw;
    margin-right: 1vw;
    width: 4vw;
    height: 1.5vw;
    box-shadow: 0 0.5vw 0.5vw 0 rgba(0,0,0,0.2), 0 0.01vw 0.5vw 0 rgba(0,0,0,0.19);
    &:hover {
        background-color: #46478b;
    }
    &:active {
        transform: translateY(-5%);
    }
    
`
export const Report = styled(AddButton)`
    position: absolute;
    top: 750%;
    border-radius: 0.2vw;
    width: 12vw;
    height: 2vw;
    left: 54%;
    font-size: 0.8vw;
`
export const CopyButton = styled.button`
    font-family: RobotoMedium,sans-serif;
    color: #34373b;
    background-color: white;
    letter-spacing: 0.07vw;
    border: none;
    border-radius: 0.4vw;
    font-size: 0.5vw;
    margin-right: 1vw;

    width: 4vw;
    height: 1.5vw;
    box-shadow: 0 0.5vw 0.5vw 0 rgba(0,0,0,0.2), 0 0.01vw 0.5vw 0 rgba(0,0,0,0.19);
    &:hover {
        background-color: #c4c2c3;
    }
    &:active {
        transform: translateY(-5%);
    }
     
`