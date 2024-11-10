import styled from "styled-components";
interface SideBarProps {
    $active?: boolean;
}
export const SidebarWrapper = styled.div<SideBarProps>`
    height: 100vh;
    position: absolute;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: width 0.3s ease; /* animation for expanding/collapsing */
    overflow: hidden;
    z-index: 100;
    width: ${({ $active }) => ($active ? '23vw' : '4.8vw')};
    
`
export const LogoWrapper = styled.div<SideBarProps>`
    margin-top: 1vw;
    position: absolute;
    left: -0.5vw;
`
export const ALGALAR = styled.div`
    font-family: InterExtraBold,sans-serif;
    left: -18%;
    top: 2.5%;
    position: relative;
    font-size: 1.3vw;
    width: 4vw;
    color: white;

`
export const Description = styled.div`
    font-family: InterExtraBold,sans-serif;
    left: -8%;
    top: 3%;
    position: relative;
    font-size: 0.4vw;
    width: 8vw;

`

export const LogosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 16.5%;
    left: 0.5%;
    height: 30vh;
    gap: 2vw;
`
export const DescriptionsWrapper = styled.div<SideBarProps>`
    display: flex;
    flex-direction: column;
    position: absolute;
    color: white;
    font-family: RobotoRegular,sans-serif;
    gap: 2.7vw;
    top: 14.5%;
    left: 16%;
    height: 80vh;
    font-size: 1.3vw;
    overflow: hidden;
`
export const DescriptionWrapper = styled.div<SideBarProps>`
    
    position: relative;
    color: white;
    white-space: nowrap;
    font-family: RobotoRegular,sans-serif;
    left: 5%;
    top: 14%;
    font-size: 1.3vw;
    overflow: hidden;
    transition: width 0.3s ease; /* 0.5s duration for smooth animation */
    width: ${({ $active }) => ($active ? '17vw' : '0')};
    `
export const ProfileActiveWrapper = styled.div<SideBarProps>`
    font-family: RobotoRegular,sans-serif;
    position: relative;
    color: black;
    left: 5%;
    top: -0.2%;
    font-size: 1.3vw;
    overflow: hidden;
    transition: width 0.3s ease; /* 0.5s duration for smooth animation */

    width: ${({ $active }) => ($active ? '15vw' : '0')}; /* Width animation */

`
export const ToggleButton = styled.div<SideBarProps>`
    background-color: black;
    position: absolute;
    top: 90%;
    left: ${({ $active }) => ($active ? '86%' : '30%')};
    color: white;
    cursor: pointer;
    transition: left 0.3s ease;
    /* animation for expanding/collapsing */
    &:hover {
        background-color: black;
    }
`


