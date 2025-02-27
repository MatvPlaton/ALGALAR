import React from 'react';
import { AddButton, ButtonsWrapper, CopyButton } from './styles/RepairButtons';

const GraphicButtons = () => {
  return (
    <ButtonsWrapper>
      <AddButton> НЕДЕЛЯ </AddButton>
      <CopyButton> МЕСЯЦ </CopyButton>
      <CopyButton> КВАРТАЛ </CopyButton>
      <CopyButton> ГОД </CopyButton>
      <CopyButton> ВСЁ ВРЕМЯ </CopyButton>
    </ButtonsWrapper>
  );
};

export default GraphicButtons;
