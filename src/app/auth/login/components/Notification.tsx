import React, { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  visible: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, visible }) => {
  const [shouldRender, setShouldRender] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`
        fixed top-[5%] left-1/2 -translate-x-1/2
         text-black font-roboto-bold 
        rounded-md text-[1.5rem]
        shadow-lg z-1000 border-2
        transition-all duration-300 ease-in-out
        ${visible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full'
        }
      `}
    >
      {message}
     
    </div>
  );
};

export default Notification;