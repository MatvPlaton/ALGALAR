import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideDownUp = keyframes`
  0% {
    transform: translate(-50%, -100%); // Начальное положение выше экрана
    opacity: 0;
  }
  10% {
    transform: translate(-50%, 0); // Спустился на место
    opacity: 1;
  }
  90% {
    transform: translate(-50%, 0); // Держится на месте
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -100%); // Уходит наверх
    opacity: 0;
  }
`;
const NotificationContainer = styled.div`
  position: fixed;
  top: 2%;
  left: 50%;
  transform: translateX(-60%);
  background-color: #dddddd;
  color: black;
  font-family: RobotoBold, sans-serif;
  font-size: 1.1vw;
  padding: 1rem 2rem;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: ${slideDownUp} 3s ease-in-out;
`;

interface NotificationProps {
  message: string;
  visible: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, visible }) => {
  return (
    <>
      {' '}
      {visible ? (
        <NotificationContainer>{message}</NotificationContainer>
      ) : (
        <div />
      )}{' '}
    </>
  );
};

export default Notification;
