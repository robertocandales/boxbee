import React from 'react';
import { InnerCard, TitleCard, Paragraph, CheckIcon, IconCard, AroundUpButton } from './styles';
import CardsInput from '../../../shared/customizedInput/CardsInput';
import checkedimage from '../../assets/checked.svg';
import uncheckedimage from '../../assets/unchecked.svg';
import iconCard from '../../assets/box-1.svg';
import UploadButton from '../UploadButton/UploadButton';
import { colors } from '../../../../config/theme';

const SmallerCards = ({ item, changeCheck }) => {
  return (
    <InnerCard backgroundColor={item.check ? colors.WHITE : colors.GRAY} boxShadow={item.check}>
      <IconCard>
        <img src={iconCard} alt='' et='' />
      </IconCard>
      {item.check ? (
        <CheckIcon onClick={() => changeCheck(item)}>
          <img src={checkedimage} alt='' />
        </CheckIcon>
      ) : (
        <CheckIcon onClick={() => changeCheck(item)}>
          <img src={uncheckedimage} alt='' />
        </CheckIcon>
      )}
      <TitleCard> {item.title} </TitleCard>
      <Paragraph> {item.description} </Paragraph>
      {item.uploadList ? (
        <AroundUpButton>
          <UploadButton />
        </AroundUpButton>
      ) : null}
      <CardsInput description={item.inputName} />
    </InnerCard>
  );
};

export default SmallerCards;
