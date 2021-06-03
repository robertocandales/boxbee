import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Avatar } from '@material-ui/core';

//styles
import {
  Wrapper,
  TopContent,
  LeftContent,
  FlexDivider,
  Img,
  WraperButton,
  Title,
  WraperProfile,
} from './styles';
import { colors } from '../config/theme';

//assets
import iconHome from './assets/icon-home.svg';
import iconBoxes from './assets/icon-boxes.svg';
import iconHives from './assets/icon-hive.svg';
import iconBoxbee from './assets/boxbee-logo.svg';
import profileImage from './assets/profile-image1.png';

const Container = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Wrapper>
      <TopContent>
        <Img src={iconBoxbee} alt='iconBoxbee' />
        <WraperProfile>
          <Title color={colors.BLACK}>Mike</Title>
          <Avatar alt='Remy Sharp' src={profileImage} />
        </WraperProfile>
      </TopContent>
      <FlexDivider>
        <LeftContent>
          <WraperButton
            backgroundColor={location.pathname === '/home' ? colors.GOLD : 'unset'}
            onClick={() => history.push('/home')}>
            <Img src={iconHome} alt='iconHome' />
            <Title>Home</Title>
          </WraperButton>
          <WraperButton
            onClick={() => history.push('/boxes')}
            backgroundColor={location.pathname === '/boxes' ? colors.GOLD : 'unset'}>
            <Img src={iconBoxes} alt='iconHome' />
            <Title>Boxes</Title>
          </WraperButton>
          <WraperButton
            onClick={() => history.push('/hives')}
            backgroundColor={location.pathname === '/hives' ? colors.GOLD : 'unset'}>
            <Img src={iconHives} alt='iconHome' />
            <Title>Hive</Title>
          </WraperButton>
        </LeftContent>
        <div>{children}</div>
      </FlexDivider>
    </Wrapper>
  );
};

export default Container;
