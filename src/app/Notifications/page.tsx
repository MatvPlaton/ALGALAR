'use client';
import React, { useState } from 'react';
import ProfileMenu from '@/app/components/Profile/ProfileMenu';
import TitleBox from '../components/Notifications/TitleBox';
import InfoBox from '../components/Notifications/InfoBox';

import ListBox from '../components/Notifications/ListBox';
const Notifications = () => {
  const [currNot, setCurrNot] = useState('');
  const [active, setActive] = useState(0);

  return (
    <div style={{ backgroundColor: '#f2f3f4', height: '100vh' }}>
      <ProfileMenu activeField={'Notifications'} />
      <TitleBox />
      <ListBox
        active={active}
        setActive={setActive}
        index={currNot}
        setIndex={setCurrNot}
      />
      <InfoBox
        currIndex={currNot}
        setActive={setActive}
        active={active}
        setCurrIndex={setCurrNot}
      />
    </div>
  );
};

export default Notifications;
