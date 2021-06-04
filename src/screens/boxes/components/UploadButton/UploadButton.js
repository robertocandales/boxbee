import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyleUpButtom } from './styles';

const UploadButton = () => {
  const useStyles = makeStyles((theme) => ({
    input: {
      display: 'none',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <StyleUpButtom
          variant='contained'
          color='primary'
          component='span'
          style={{ boxDecorationBreak: 'none' }}>
          UPLOAD LIST ⬆️
        </StyleUpButtom>
      </label>
    </>
  );
};

export default UploadButton;
