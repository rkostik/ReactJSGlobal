import React from 'react';
import styles from '../Footer/Footer.module.css';
import stylesLogo from "../Header/Logo/Logo.module.css";
import PropTypes from 'prop-types';
import {CONST_LIST} from '../../const.js';


const Footer = () => (
    <div className={styles.footer_container}>
        <div className={`${styles.div_footer_box} ${styles.div_footer}`}>
            <span className={stylesLogo.h1_prefix}>{CONST_LIST.PREFIX_LOGO}</span>{CONST_LIST.POSTFIX_LOGO}
        </div>
    </div>
)

Footer.propTypes ={
    arrConst: PropTypes.objectOf(PropTypes.string)
}

export default Footer