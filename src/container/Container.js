import React from 'react';
import { useHistory } from 'react-router';

//styles
import { Wrapper } from './styles';

const Container = ({ children }) => {
  const history = useHistory();
  return (
    <Wrapper>
      <button onClick={() => history.push('/home')}>home</button>
      <button onClick={() => history.push('/boxes')}>boxes</button>
      <button onClick={() => history.push('/hives')}>hives</button>
      {children}
    </Wrapper>
  );
};

export default Container;
