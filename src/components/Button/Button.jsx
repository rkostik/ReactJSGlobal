import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
    <div className={`${styles[props.btn_block_style]} ${styles[props.btn_style]}`}>
        <div className={`${styles.btn_txt_coral} ${styles[props.txt_style]}`} onClick={props.onDelClick}>{props.textBtn}</div>
    </div>
)

export default Button