import styled from 'styled-components';
interface props {
  isActive: boolean;
}
export const EnterWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<props>`
  font-family: RobotoMedium, sans-serif;
  position: absolute;
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  background-color: ${(props) => (props.isActive ? '#5A5CA8' : '#F5F5F5')};
  left: 93%;
  bottom: 1%;
  letter-spacing: 0.1vw;
  border: none;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  width: 13.5rem;
  height: 2.5rem;
  box-shadow:
    0 0.5vw 0.5vw 0 rgba(0, 0, 0, 0.2),
    0 0.01vw 0.5vw 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background-color: ${(props) => (props.isActive ? '#46478b' : '#e3e3e3')};
  }
  &:active {
    transform: translateY(-5%);
  }
  @media (max-width: 1000px) {
    left: 49%;
    position: relative;
    top: 40%;
  }
`;
