import React from 'react';
import {Wrapper} from "./styles/UnderHeaderText";

const UnderHeaderText = (props: { message: string}) => {

    return <Wrapper> {props.message} </Wrapper>
}

export default UnderHeaderText;