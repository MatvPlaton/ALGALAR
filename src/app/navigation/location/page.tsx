'use client';
import React, { useEffect, useState } from 'react';
import ProfileMenu from '../Menu';
import TitleBox from './components/TitleBox';

import MapBox from './components/MapBox';
import ListBox from './components/ListBox';
interface car {
  brand: string;
  car_id: string;
  state_number: string;
  unique_id: string;
}
const Page = () => {
  const [id, setId] = useState('');

  const [cars, setCars] = useState<car[]>([]);

  useEffect(() => {
    fetch('/api/listcars')
    
    .then(res => res.json())
    .then((r) => {
        setCars(r.data);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#f2f3f4', height: '100vh' }}>
      <ProfileMenu activeField={'location'} />
      <TitleBox />
      <MapBox cars={cars} id={id} setId={setId} />
      <ListBox cars={cars} id={id} setId={setId} />
    </div>
  );
};

export default Page;
