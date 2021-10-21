import React from 'react';
import styles from './Logo.module.css';

const LogoThin = (props)=>(
    <h1 className={`${styles.h1_logo} ${styles.h1_box}`}>
        {props.prefix}{props.postfix}
    </h1>

)

export default LogoThin