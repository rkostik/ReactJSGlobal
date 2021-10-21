import React from 'react';
import styles from './BtnAdd.module.css';

const BtnAdd = (props) => (
    <div className={styles.div_btnAdd}>
        <div className={styles.txt_Add} onClick={props.addClick}>{props.textAdd}</div>
    </div>
)

export default BtnAdd