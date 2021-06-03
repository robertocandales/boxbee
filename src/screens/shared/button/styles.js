import styled from 'styled-components';
import { colors } from '../../../config/theme';

export const CustomizedButton = styled.button`
  background-color: ${colors.GOLD}; 
  width: 253px;
  height: 56px;
  margin: 32px 22px 0 7px;
  padding: 20px 51px 20px 68px;
  border-radius: 15px;
  border: none;
  font-weight: bold;
  &:hover {
    background-color: ${colors.GRAY};
  }
`;

