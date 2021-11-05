import React from 'react';
import styles from '../Confirmation.module.css';
import {CONST_LIST} from '../../../const.js'
import Confirmation from '../Confirmation.jsx';


const Completion = () => (
    <Confirmation>
        <div className={styles.circle_confirm}>
            <img className={styles.tick} src='images/tick.png'/>
        </div>
        <div className={styles.content_title}>{CONST_LIST.CONFIRM_TITLE}</div>
        <div className={`${styles.content_text} ${styles.content_text_completion}`}>{CONST_LIST.CONFIRM_TEXT}</div>
    </Confirmation>
)

export default Completion