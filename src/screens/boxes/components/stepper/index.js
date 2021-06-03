import React from 'react';
import { colors } from '../../../../config/theme';
import { Wrapper, WrapperData, Text, StepperText, Container, FelxDivider } from './styles';

//assets
import close from '../../assets/close.svg';

const StepperComponent = () => {
  return (
    <Wrapper>
      <WrapperData>
        <StepperText>
          <FelxDivider>
            {' '}
            <Text color={colors.DUSK} fontWeight={'bold'}>
              {' '}
              1. Setup
            </Text>
          </FelxDivider>
          <FelxDivider justify={'center'}>
            {' '}
            <Text> 2. Goodies</Text>
          </FelxDivider>
          <FelxDivider justify={'center'}>
            {' '}
            <Text>3. Order summary</Text>
          </FelxDivider>
          <FelxDivider justify={'center'}>
            <Text> 4. Checkout</Text>
          </FelxDivider>
          <FelxDivider justify='flex-end'>
            <Text>5. Complete!</Text>
          </FelxDivider>
        </StepperText>

        <Container color={colors.GOLD} width={'100%'}>
          <progress value={6} max={100} />
        </Container>
      </WrapperData>
      <FelxDivider justify='flex-end'>
        <img src={close} alt='close' />
      </FelxDivider>
    </Wrapper>
  );
};

export default StepperComponent;
