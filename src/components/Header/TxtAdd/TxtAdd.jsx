import React from 'react';
import styles from "../BtnAdd/BtnAdd.module.css";
import PropTypes from 'prop-types';

const TxtAdd = (props) => (
    <div className={styles.txt_Add}>{props.text}</div>
)

TxtAdd.propTypes ={
    text: PropTypes.string
}

export default TxtAdd
