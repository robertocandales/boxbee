import React from 'react'


//styles
import { CustomizedButton } from './styles';


const CardButton = ({ description = 'add description' }) => {
    return (
        <CustomizedButton>
            {description}
        </CustomizedButton>
    )
}

export default CardButton
