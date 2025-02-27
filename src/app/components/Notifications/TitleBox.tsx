import React from 'react';
import { TitleWrapper } from './styles/TitleBox';
const TitleBox = () => {
  return (
    <>
      <TitleWrapper>
        {' '}
        <div style={{ position: 'relative', top: '10%', left: '1%' }}>
          {' '}
          Уведомления{' '}
        </div>{' '}
      </TitleWrapper>
    </>
  );
};

export default TitleBox;
