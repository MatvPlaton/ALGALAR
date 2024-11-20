import React from 'react';
import {
    AddButton,
    ButtonsWrapper,
    CopyButton,
    Report,
    TAndP,
    TempAndPressureWrapper,
    Wrapper
} from './styles/GraphicButtons'

const GraphicButtons = () => {
    return (
        <Wrapper>
            <TempAndPressureWrapper>
                <TAndP> ГРАФИК ПО ДАВЛЕНИЮ</TAndP>
                <TAndP style={{marginLeft: '4.3vw'}}> ГРАФИК ПО ТЕМПЕРАТУРЕ</TAndP>

            </TempAndPressureWrapper>
            <ButtonsWrapper>
            <AddButton> НЕДЕЛЯ </AddButton>
                <CopyButton> МЕСЯЦ </CopyButton>
                <CopyButton> КВАРТАЛ </CopyButton>
                <CopyButton> ГОД </CopyButton>
                <CopyButton> ВСЁ ВРЕМЯ </CopyButton>
        </ButtonsWrapper>
            <Report> ОТЧЁТ ПО МАШИНЕ </Report>

        </Wrapper>
    )
}

export default GraphicButtons;