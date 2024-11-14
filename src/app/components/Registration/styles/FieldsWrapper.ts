import styled from 'styled-components';

export const FieldsWrapper = styled.div`
    flex-direction: column;
    position: relative;
    top: 7%;
    left: 3%;
    border: solid red 2px;
    @media (max-width: 1000px) {
        left: 41.5%;
        flex-direction: column;
        position: relative;
        width: 40%;
    }
`