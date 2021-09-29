import React from 'react';
import styles from './BtnAdd.module.css';
import PropTypes from "prop-types";

const BtnAdd = (props) => (
    <div className={styles.div_btnAdd}>
        <div className={styles.txt_Add}>{props.textAdd}</div>
    </div>
)

BtnAdd.propTypes = {
    textAdd: PropTypes.string
}

export default BtnAdd