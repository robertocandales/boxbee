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
import uncheckedimage from './assets/unchecked.svg';
import iconCard from './assets/box-1.svg';
import CardButton from '../shared/button/CardButton';

//data
import data from './data/index.json';
import SmallerCards from './SmallerCards';
import StepperComponent from './components/stepper';

const Boxes = () => {
  console.log(data);
  return (
    <>
      <WrapperCard>
        <StepperComponent />
        <Title>Step 1: Set up your box</Title>
        <CardsFlex>
          {(data.data || []).map((item, index) => (
            <SmallerCards data={data} index={index} />
          ))}
        </CardsFlex>
        <WrapperButton>
          <CardButton description={'GET STARTED  →'} />
        </WrapperButton>
      </WrapperCard>
    </>
  );
};

export default Boxes;
