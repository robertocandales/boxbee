import React from 'react';
import { InnerCard, TitleCard, Paragraph, CheckIcon, IconCard, AroundUpButton } from './styles';
import CardsInput from '../../../shared/customizedInput/CardsInput';
import checkedimage from '../../assets/checked.svg';
import uncheckedimage from '../../assets/unchecked.svg';

import UploadButton from '../UploadButton/UploadButton';
import { colors } from '../../../../config/theme';

//assets
import iconCard from '../../assets/box-1.svg';
import iconCard1 from '../../assets/box-2.svg';
import iconCard2 from '../../assets/box-3.svg';

const SmallerCards = ({ item, changeCheck }) => {
  return (
    <InnerCard backgroundColor={item.check ? colors.WHITE : colors.GRAY} boxShadow={item.check}>
      <IconCard>
        <img
          src={item.icon === 1 ? iconCard : item.icon === 2 ? iconCard1 : iconCard2}
          alt=''
          et=''
        />
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
      <AroundUpButton>
        {' '}
        <CardsInput description={item.inputName} />
      </AroundUpButton>
    </InnerCard>
  );
};

export default SmallerCards;
