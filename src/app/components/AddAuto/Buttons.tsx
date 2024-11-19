import React from 'react';
import {AddButton, ButtonsWrapper, CopyButton} from './styles/Buttons'
import filledTire from '../../assets/AddAuto/Rectangle 36.svg'

interface Props {
    redacting: boolean;
    setRedacting: React.Dispatch<React.SetStateAction<boolean>>;

    currTire : number;
    setImages : React.Dispatch<React.SetStateAction<string[]>>;
}
const Buttons: React.FC<Props> = ({redacting, setRedacting,
                                      setImages,
                                      currTire}) => {

    const addConfig = (currTire : number) => {
        setRedacting(false)
        setImages((prevImage) =>
            prevImage.map((item, i) => i === currTire ? filledTire : item)
        );
    }

    return (
        <ButtonsWrapper>
            {redacting ? <>
            <CopyButton> ВЗЯТЬ ДАННЫЕ С ПРЕДУЩЕГО КОЛЕСА </CopyButton>
            <AddButton onClick={() => addConfig(currTire)}> ДОБАВИТЬ </AddButton>
            </> : <> </>}
        </ButtonsWrapper>
    )
}

export default Buttons;