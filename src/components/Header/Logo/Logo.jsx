import React from 'react';
import styles from './Logo.module.css';
import PropTypes from 'prop-types';

const Logo = (props)=>(
    <h1 className={`${styles.h1_logo} ${styles.h1_box}`}>
        <span className={styles.h1_prefix}>{props.prefix}</span>{props.postfix}
    </h1>

)

Logo.propTypes={
    prefix: PropTypes.string,
    postfix: PropTypes.string
}

export default Logo