import React, { useState } from 'react';
import { WrapperCard, Title, WrapperButton, CardsFlex } from './styles';
import CardButton from '../shared/button/CardButton';
import StepperComponent from './components/stepper';

//data
import data from './data/index.json';
import SmallerCards from './components/SmallerCard/SmallerCards';

const Boxes = () => {
  const [cardData, setCardData] = useState(data.data);

  const changeCheck = (data) => {
    const newArray = cardData.map((item) => {
      if (item.title === data.title) {
        return {
          ...item,
          check: !item.check,
        };
      }
      return item;
    });
    setCardData(newArray);
    console.log(newArray);
  };

  console.log(cardData);
  return (
    <>
      <WrapperCard>
        <StepperComponent />
        <Title>Step 1: Set up your box</Title>
        <CardsFlex>
          {(cardData || []).map((item, index) => (
            <SmallerCards changeCheck={changeCheck} item={item} key={index} />
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
