import React from 'react';
import { colors } from '../../../../config/theme';
import { Wrapper, Stepper, StepperText, IsFille, Container, FelxDivider } from './styles';

const StepperComponent = () => {
  return (
    <>
      <Wrapper>
        <StepperText>
          <FelxDivider>1. Setup</FelxDivider>
          <FelxDivider justify={'center'}>2. Goodies</FelxDivider>
          <FelxDivider justify={'center'}>3. Order summary</FelxDivider>
          <FelxDivider justify={'center'}>4. Checkout</FelxDivider>
          <FelxDivider justify='flex-end'>5. Complete!</FelxDivider>
        </StepperText>
        <Stepper>
          <IsFille backgroundColor={true} />
          <IsFille />

          <IsFille />
          <IsFille />
        </Stepper>
        <Container color={colors.GOLD} width={'100%'}>
          <progress value={6} max={100} />
        </Container>
      </Wrapper>
    </>
  );
};

export default StepperComponent;
