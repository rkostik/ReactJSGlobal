import React from 'react';
import styles from './Close.module.css';

const Close = (props) => {
    return(
        <div className={styles.close} onClick={props.handleClick}/>
    )

}

export default Close