import React from "react";
import styled from "styled-components";



const NotificationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

interface NotificationProps {
    message: string;
    visible: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, visible }) => {
    return (<> {visible ?
        <NotificationContainer>
            {message}
        </NotificationContainer> : <div />} </>)};

export default Notification;
