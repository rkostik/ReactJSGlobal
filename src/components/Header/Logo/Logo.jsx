import React from 'react';
import styles from './Logo.module.css';
import {CONST_LIST} from '../../../const.js';

const Logo = ()=> (
        <h1 className={`${styles.h1_logo} ${styles.h1_box}`}>
            <span className={styles.h1_prefix}>{CONST_LIST.PREFIX_LOGO}</span>{CONST_LIST.POSTFIX_LOGO}
        </h1>
    )

export default Logo