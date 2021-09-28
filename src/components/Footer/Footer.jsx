import React from 'react';
import styles from '../Footer/Footer.module.css';
import stylesLogo from "../Header/Logo/Logo.module.css";
import PropTypes from 'prop-types';

const Footer = (props) => (
    <div className={styles.footer_container}>
        <div className={`${styles.div_footer_box} ${styles.div_footer}`}>
            <span className={stylesLogo.h1_prefix}>{props.prefix}</span>{props.postfix}
        </div>
    </div>
)

Footer.propTypes = {
    prefix: PropTypes.string,
    postfix: PropTypes.string
}

export default Footer