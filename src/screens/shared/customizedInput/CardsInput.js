import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CardsInput = ({ description = 'add description' }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id='outlined-number'
          label={description}
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />
      </div>
    </form>
  );
};

export default CardsInput;
