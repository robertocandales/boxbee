import styled from 'styled-components';
import { colors } from '../../../../config/theme';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 5vh;
`;

export const StepperText = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20%;
  justify-content: space-between;
`;

export const StepperContainer = styled.div`
  background-color: ${colors.GOLD};
  width: 100%;
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20%;
`;

export const Stepper = styled.div`
  background-color: ${colors.THINGRAY};
  width: 100%;
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20%;
  border-radius: 11px;
`;
export const IsFille = styled.div`
  background-color: ${(props) => (props.backgroundColor ? colors.GOLD : 'none')};
  width: 100%;
  border-radius: 11px;
`;

export const FelxDivider = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
`;

export const Container = styled.div`
  width: 100%;
  progress {
    width: 100%;
  }

  progress[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 20px;
    border-radius: 20px;
    background-color: #eee;
  }

  progress[value]::-webkit-progress-value {
    height: 20px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
  }
`;
