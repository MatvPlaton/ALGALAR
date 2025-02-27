import styled from 'styled-components';

export const RegistrationWrapper = styled.button`
  font-family: RobotoMedium, sans-serif;
  position: absolute;
  top: 87%;
  color: white;
  background-color: #5a5ca8;
  left: 2.5%;
  letter-spacing: 0.1vw;
  border: none;
  border-radius: 0.4vw;
  font-size: 0.9vw;
  width: 8vw;
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
