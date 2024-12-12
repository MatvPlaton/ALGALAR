import styled from "styled-components";
interface SideBarProps {
    $active?: boolean;
    height?: string;
}
export const SidebarWrapper = styled.div<SideBarProps>`
    height: ${props => props.height};
    position: absolute;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: width 0.3s ease; /* animation for expanding/collapsing */
    overflow: hidden;
    z-index: 100;
    width: ${({ $active }) => ($active ? '26.5vw' : '4.8vw')};
`
export const HeaderWrapper = styled.div`
    position: absolute;
    height: 10vh;
    left: 0;
    
    transition: width 0.3s ease;
    width: 17vw;
    display: flex;
`
export const LogoWrapper = styled.div<SideBarProps>`
    margin-top: 1vw;
    position: relative;
    left: -0.5vw;
`
export const ALGALAR = styled.div`
    font-family: InterExtraBold,sans-serif;
    position: relative;
    top: 20%;
    font-size: 1.3vw;
    width: 4vw;
    color: white;
`
export const Description = styled.div`
    font-family: InterExtraBold,sans-serif;
    top: 55%;
    left: -24%;
    position: relative;
    font-size: 0.6vw;
    white-space: nowrap;
`
export const ComponentsList = styled.div`
    flex-direction: column;
    display: flex;
    position: absolute;
    left: 6%;
    top: 15vh;
`
export const Component = styled.div`
    position: relative;
    background-color: black;
    font-size: 1vw;
    white-space: nowrap;
    display: flex;
    height: 6vh;
    flex-direction: row;
    margin-bottom: 1vw;
        
`
export const ComponentImage = styled.div`
    width: 5vw;
    height: 5vh;
    position: relative;
    
    left: -2%;
    place-items: center;
    display: grid;
`
export const ComponentText = styled.div`
    position: relative;
    left: 3.8%;
    top: -5%;
    height: 100%;
    font-size: 1.4vw;
    place-items: center;
    display: grid;
    font-family: RobotoRegular,sans-serif;
    
`
export const ComponentTextOn = styled.div`
    position: absolute;
    color: black;
    left: 22%;
    top: -3%;
    height: 100%;
    font-size: 1.5vw;
    font-family: RobotoRegular,sans-serif;
    place-items: center;
    display: grid;
`
export const ToggleButton = styled.div<SideBarProps>`
    background-color: black;
    position: absolute;
    top: 90%;
    left: ${({ $active }) => ($active ? '86%' : '30%')};
    color: white;
    cursor: pointer;
    transition: left 0.3s ease;
    &:hover {
        background-color: black;
    }
`


