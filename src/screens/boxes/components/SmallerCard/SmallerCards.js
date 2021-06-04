import React from 'react';
import { InnerCard, TitleCard, Paragraph, CheckIcon, IconCard, AroundUpButton, InputStyle } from './styles';
import CardsInput from '../../../shared/customizedInput/CardsInput';
import checkedimage from '../../assets/checked.svg';
import uncheckedimage from '../../assets/unchecked.svg';
import iconCard from '../../assets/box-1.svg';
import UploadButton from '../UploadButton/UploadButton';
import { colors } from '../../../../config/theme';

const SmallerCards = ({ item, index }) => {
    return (
        <InnerCard
            backgroundColor={item.check ? colors.WHITE : colors.GRAY}
            key={index}
            boxShadow={item.check}>
            <IconCard>
                <img src={iconCard} alt='' srcset='' />
            </IconCard>
            {item.check ? (
                <CheckIcon>
                    <img src={checkedimage} alt='' srcset='' />
                </CheckIcon>
            ) : (
                    <CheckIcon>
                        <img src={uncheckedimage} alt='' srcset='' />
                    </CheckIcon>
                )}

            <TitleCard> {item.title} </TitleCard>

            <Paragraph> {item.description} </Paragraph>
            {item.uploadList ? (
                <AroundUpButton>
                    {' '}
                    <UploadButton />
                </AroundUpButton>
            ) : null}
            <InputStyle>
                <CardsInput description={item.inputName} />
            </InputStyle>
        </InnerCard>
    );
};

export default SmallerCards;
