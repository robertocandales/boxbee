import React from 'react';
import { useHistory, useLocation } from 'react-router';

//styles
import { Wrapper, TopContent, LeftContent, FlexDivider, Img, WraperButton } from './styles';

//assets
import iconHome from './assets/icon-home.svg';
import iconBoxes from './assets/icon-boxes.svg';
import iconHives from './assets/icon-hive.svg';

const Container = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Wrapper>
      <TopContent>
        <button onClick={() => history.push('/home')}>home</button>
        <button onClick={() => history.push('/boxes')}>boxes</button>
        <button onClick={() => history.push('/hives')}>hives</button>
      </TopContent>
      <FlexDivider>
        <LeftContent>
          <WraperButton onClick={() => history.push('/home')}>
            <Img src={iconHome} alt='iconHome' />
            <div>Home</div>
          </WraperButton>
          <WraperButton onClick={() => history.push('/boxes')}>
            <Img src={iconBoxes} alt='iconHome' />
            <div>Boxes</div>
          </WraperButton>
          <WraperButton onClick={() => history.push('/hives')}>
            <Img src={iconHives} alt='iconHome' />
            <div>Hives</div>
          </WraperButton>
        </LeftContent>
        <div>{children}</div>
      </FlexDivider>
    </Wrapper>
  );
};

export default Container;
