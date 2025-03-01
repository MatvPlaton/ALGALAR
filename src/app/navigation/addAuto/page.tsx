'use client';
import React, { useEffect, useState } from 'react';
import ProfileMenu from '@/app/navigation/Menu';
import ConfigFields from './components/ConfigFields';
import SeparateWheelFields from './components/SeparateWheelFields';
import emptyTire from '@/app/assets/AddAuto/Rectangle 41.svg';
import axios from 'axios';

import { useAuthStore } from '@/app/redux/store';
import { useRefreshStore } from '@/app/redux/store';
import redactTire from '@/app/assets/AddAuto/Frame 3.svg';
import fullTire from '@/app/assets/AddAuto/Rectangle 36.svg';
import TitleBox from './components/TitleBox';

const AutoPark = () => {
  const [redacting, setRedacting] = useState(false);
  const [axis, setAxis] = useState(2);
  const [isChecked, setIsChecked] = useState(false);
  const [currTire, setCurrTire] = useState(-1);
  const [isDoubled, setIsDoubled] = useState(Array(6).fill(false));

  const [images, setImages] = useState(
    Array(24).fill({ full: false, img: emptyTire })
  );
  const [carId, setCarId] = useState('');

  const token = useAuthStore((state) => state.token);
  const refresh = useRefreshStore((state) => state.refresh);

  const setToken = useAuthStore((state) => state.setToken);
  const setRefresh = useRefreshStore((state) => state.setRefresh);

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        axios
          .post(
            'https://algalar.ru:8080/refresh',
            {},
            {
              headers: {
                Authorization: `Bearer ${refresh}`,
              },
            }
          )
          .then((r) => {
            setToken(r.data.accessToken);
            setRefresh(r.data['refreshToken']);
          });
      }
      return error;
    }
  );

  useEffect(() => {
    axios
      .get('https://algalar.ru:8080/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        console.log(r);
      })
      .catch();
  }, [currTire]);

  const switchImage = (index: number) => {
    console.log(index);
    setCurrTire(index);
    setRedacting(true);
    setImages((prevImage) =>
      prevImage.map((item, i) =>
        i === index
          ? { ...item, img: redactTire }
          : item.full
            ? { full: true, img: fullTire }
            : { full: false, img: emptyTire }
      )
    );
  };

  return (
    <div style={{ backgroundColor: '#f2f3f4', height: '100vh' }}>
      <ProfileMenu activeField={'addAuto'} />
      <TitleBox />

      <ConfigFields
        carId={carId}
        switchImage={switchImage}
        setCarId={setCarId}
        images={images}
        isDoubled={isDoubled}
        setIsDoubled={setIsDoubled}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        axis={axis}
        setAxis={setAxis}
        currTire={currTire}
      />

      <SeparateWheelFields
        carId={carId}
        setImages={setImages}
        setRedacting={setRedacting}
        currTire={currTire}
        redacting={redacting}
      />
    </div>
  );
};

export default AutoPark;
