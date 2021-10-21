import React from 'react';
import styles from './Logo.module.css';

const Logo = (props)=>(
    <h1 className={`${styles.h1_logo} ${styles.h1_box}`}>
        <span className={styles.h1_prefix}>{props.prefix}</span>{props.postfix}
    </h1>

)

export default Logo