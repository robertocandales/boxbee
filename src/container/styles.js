import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../config/theme';

export const Wrapper = styled.div`
  background-color: ${colors.GRAY};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FlexDivider = styled.div`
  background-color: ${colors.GRAY};
  display: grid;
  grid-template-columns: 15% 80%;
`;

export const TopContent = styled.div`
  background-color: ${colors.GRAY};
  height: 15vh;
`;

export const LeftContent = styled.div`
  background-color: ${colors.GRAY};
  display: flex;
  flex-direction: column;
`;

export const WraperButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: none;
  background-color: ${(props) => props.backgroundColor || colors.GRAY};
  height: 12vh;
`;

export const Img = styled.img``;
