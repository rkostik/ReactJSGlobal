import React from 'react';
import AmountCSS from './Amount.module.css';


const Amount = (props) => (
    <h1 className={AmountCSS.sr_text}>
        {props.amount}{props.text}
    </h1>

)

export default Amount