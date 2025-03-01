import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  position: absolute;
  left: 68.5%;
  top: 85%;
  width: auto;
  height: auto;
`;

export const AddButton = styled.button`
  font-family: RobotoMedium, sans-serif;
  color: white;
  background-color: #5a5ca8;
  letter-spacing: 0.1vw;
  border: none;
  border-radius: 0.4vw;
  margin-left: 2vw;
  font-size: 0.9vw;
  width: 7vw;
  height: 2.5vw;
  box-shadow:
    0 0.5vw 0.5vw 0 rgba(0, 0, 0, 0.2),
    0 0.01vw 0.5vw 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background-color: #46478b;
  }
  &:active {
    transform: translateY(-5%);
  }
`;
export const CopyButton = styled.button`
  font-family: RobotoMedium, sans-serif;
  color: #34373b;
  background-color: white;
  letter-spacing: 0.07vw;
  border: none;
  border-radius: 0.4vw;
  font-size: 0.9vw;
  width: 20vw;
  height: 2.5vw;
  box-shadow:
    0 0.5vw 0.5vw 0 rgba(0, 0, 0, 0.2),
    0 0.01vw 0.5vw 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background-color: #c4c2c3;
  }
  &:active {
    transform: translateY(-5%);
  }
`;
