import React from 'react';
import styles from './Confirmation.module.css';
import Close from "./Close/Close.jsx";

const Confirmation = (props) => (
    <div className={styles.main_block}>
        {props.children}
        <Close handleClick={props.closeClick}/>
    </div>
)

export default Confirmation