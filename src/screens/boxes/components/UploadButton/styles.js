import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { colors } from '../../../../config/theme';

export const StyleUpButtom = styled(Button)`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colors.WHITE};
  padding: 20px 51px 20px 68px;
  border-radius: 15px;
  border: none;
  font-size: 15px;
  font-weight: bold;
`;
