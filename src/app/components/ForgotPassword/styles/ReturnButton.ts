import styled from 'styled-components';

export const ReturnWrapper = styled.button`
  font-family: RobotoMedium, sans-serif;
  letter-spacing: 0.1vw;
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
    left: 46%;
    position: relative;
    top: 10%;
  }
`;
