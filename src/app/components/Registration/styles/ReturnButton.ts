import styled from 'styled-components';

export const ReturnWrapper = styled.button`
  font-family: RobotoMedium, sans-serif;
  position: absolute;
  color: #34373b;
  background-color: white;
  top: 107%;
  left: 57%;
  letter-spacing: 0.1vw;
  border: none;
  border-radius: 0.4vw;
  font-size: 0.9rem;
  width: 10rem;
  height: 2.5rem;
  box-shadow:
    0 0.5vw 0.5vw 0 rgba(0, 0, 0, 0.2),
    0 0.01vw 0.5vw 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background-color: #c4c2c3;
  }
  &:active {
    transform: translateY(-5%);
  }
  @media (max-width: 1000px) {
    left: -46%;
    position: relative;
    top: 10%;
  }
`;
