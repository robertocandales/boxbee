import React from 'react';
import { WrapperCard, Title, WrapperButton, CardsFlex } from './styles';
import CardButton from '../shared/button/CardButton';
import StepperComponent from './components/stepper';

//data
import data from './data/index.json';
import SmallerCards from './components/SmallerCard/SmallerCards';

const Boxes = () => {
  return (
    <>
      <WrapperCard>
        <StepperComponent />
        <Title>Step 1: Set up your box</Title>
        <CardsFlex>
          {(data.data || []).map((item, index) => (
            <SmallerCards item={item} index={index} />
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
