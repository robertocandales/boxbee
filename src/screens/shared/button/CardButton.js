import React from 'react';
import Button from '@material-ui/core/Button';
import { CustomizedButton } from './styles';


const CardButton = () => {
    return (
        <CustomizedButton variant="contained" disableElevation>
            GET STARTED →
        </CustomizedButton>
    );
}

export default CardButton
