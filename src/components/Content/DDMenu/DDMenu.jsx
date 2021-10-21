import React from 'react';
import styles from './DDMenu.module.css'

const DDMenu = (props) => (
    <div className={`${styles.ddm_block} ${props.active && props.itemKey === props.ddmKey ? styles.active : styles.nonactive}`}>
        <div className={styles.close} onClick={props.closeClick}/>
        <div className={styles.ddm_item} onClick={props.editClick}>
            <div className={styles.ddm_txt}>Edit</div>
        </div>
        <div className={styles.ddm_item} onClick={props.deleteClick}>
            <div className={styles.ddm_txt}>Delete</div>
        </div>
    </div>
)

export default DDMenu