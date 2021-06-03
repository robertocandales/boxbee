import React from 'react';
import {
    WrapperCard,
    InnerCard,
    TitleCard,
    Paragraph,
    Title,
    CheckIcon,
    IconCard,
    WrapperButton,
    CardsFlex,
} from './styles';
import CardsInput from '../shared/customizedInput/CardsInput';
import checkedimage from './assets/checked.svg';
import uncheckedimage from './assets/unchecked.svg'
import iconCard from './assets/box-1.svg';
import CardButton from '../shared/button/CardButton';
import UploadButton from './components/UploadButton';

const SmallerCards = ({ data, index }) => {
    return (
        <InnerCard key={index}>
            <IconCard>
                <img src={iconCard} alt='' srcset='' />
            </IconCard>
            {data.data[index].check ? (
                <CheckIcon>
                    <img src={checkedimage} alt='' srcset='' />
                </CheckIcon>
            ) : (
                    <CheckIcon>
                        <img src={uncheckedimage} alt='' srcset='' />
                    </CheckIcon>
                )}

            <TitleCard> {data.data[index].title} </TitleCard>

            <Paragraph> {data.data[index].description} </Paragraph>
            {data.data[index].uploadList ? (<UploadButton />) : null}
            <CardsInput description={data.data[index].inputName} />
        </InnerCard>
    )
}

export default SmallerCards
