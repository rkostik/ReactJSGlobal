import React from 'react';
import styles from '../Footer/Footer.module.css';
import stylesLogo from "../Header/Logo/Logo.module.css";
import PropTypes from 'prop-types';

const Footer = (props) => (
    <div className={styles.footer_container}>
        <div className={`${styles.div_footer_box} ${styles.div_footer}`}>
            <span className={stylesLogo.h1_prefix}>{props.arrConst.PREFIX_LOGO}</span>{props.arrConst.POSTFIX_LOGO}
        </div>
    </div>
)

Footer.propTypes ={
    arrConst: PropTypes.objectOf(PropTypes.string)
}

export default Footer