import React from 'react';
import styles from './Logo.module.css';
import {CONST_LIST} from '../../../const.js';

const LogoThin = () => (
        <h1 className={`${styles.h1_logo} ${styles.h1_box}`}>
            {CONST_LIST.PREFIX_LOGO}{CONST_LIST.POSTFIX_LOGO}
        </h1>
    )


export default LogoThin