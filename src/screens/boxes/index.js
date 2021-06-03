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
} from './styles';
import CardsInput from '../shared/customizedInput/CardsInput';
import checkedimage from './assets/checked.svg';
import iconCard from './assets/box-1.svg';
import CardButton from '../shared/button/CardButton';

//data
import data from './data/index.json';

const Boxes = () => {
  console.log(data);
  return (
    <>
      <WrapperCard>
        <Title>Step 1: Set up your box</Title>
        {(data.data || []).map((item, index) => (
          <InnerCard key={index}>
            <IconCard>
              <img src={iconCard} alt='' srcset='' />
            </IconCard>
            {item.check ? (
              <CheckIcon>
                <img src={checkedimage} alt='' srcset='' />
              </CheckIcon>
            ) : (
              <CheckIcon>
                {/*<img src={checkedimage} alt='' srcset='' />*/}
                falta
              </CheckIcon>
            )}
            <TitleCard> {item.title} </TitleCard>

            <Paragraph> {item.description} </Paragraph>
            <CardsInput description={item.inputName} />
          </InnerCard>
        ))}

        <WrapperButton>
          <CardButton description={'GET STARTED  →'} />
        </WrapperButton>
      </WrapperCard>
    </>
  );
};

export default Boxes;
