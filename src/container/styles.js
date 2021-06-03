import styled from 'styled-components';
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 40px 10px 0px;
`;

export const LeftContent = styled.div`
  background-color: ${colors.GRAY};
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const WraperButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: none;
  background-color: ${(props) => props.backgroundColor || colors.GRAY};
  height: 12vh;
  box-shadow: none;
`;

export const Img = styled.img``;

export const Title = styled.div`
  color: ${(props) => props.color || colors.DUSK};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: bold;
  text-transform: uppercase;
`;

export const WraperProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
`;

export const MainIconPosition = styled.div`
  margin-left: 3.8%;
`;
