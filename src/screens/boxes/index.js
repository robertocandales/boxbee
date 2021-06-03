import React from 'react';
import {
  WrapperCard,
  InnerCard,
  TitleCard,
  Paragraph,
  Title,
  CheckIcon,
  IconCard,
  CardBut,
} from './styles';
import CardsInput from '../shared/customizedInput/CardsInput';
import checkedimage from './assets/checked.svg';
import iconCard from './assets/box-1.svg';
import CardButton from '../shared/button/CardButton';

const Boxes = () => {
  return (
    <div>
      {' '}
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis in cupiditate
      perspiciatis, accusamus esse doloremque, commodi, iure excepturi similique necessitatibus rem
      eos tempore. Itaque obcaecati corrupti non suscipit tempora nostrum?{' '}
      <WrapperCard>
        <Title>Step 1: Set up your box</Title>
        <InnerCard>
          <IconCard>
            <img src={iconCard} alt='' srcset='' />
          </IconCard>
          <CheckIcon>
            <img src={checkedimage} alt='' srcset='' />
          </CheckIcon>
          <TitleCard>Give your box a name </TitleCard>

          <Paragraph>Create a nickname to help track your box orders</Paragraph>
          <CardsInput />
        </InnerCard>
        <CardButton />
      </WrapperCard>
    </div>
  );
};

export default Boxes;
