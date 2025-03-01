'use client';
import React, { useState } from 'react';
import ProfileMenu from '../Menu';
import TitleBox from './components/TitleBox';
import InfoBox from './components/InfoBox';

import ListBox from './components/ListBox';
const Notifications = () => {
  const [currNot, setCurrNot] = useState('');
  const [active, setActive] = useState(0);

  return (
    <div style={{ backgroundColor: '#f2f3f4', height: '100vh' }}>
      <ProfileMenu activeField={'notifications'} />
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
