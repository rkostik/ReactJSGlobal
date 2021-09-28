import React from 'react';
import styles from './Amount.module.css';
import PropTypes from 'prop-types';

const Amount = (props) => (
    <div className={styles.sr_text}>
        {props.amount}{props.text}
    </div>

)

Amount.propTypes = {
    amount: PropTypes.string,
    text: PropTypes.string
}

export default Amount