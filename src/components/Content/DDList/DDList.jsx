import React from 'react';
import styles from './DDList.module.css'

const DDList = (props) => (
    <div className={styles.main_dd}>
        <div className={styles.select_block}>
            <select>
                <option>release date</option>
                <option>rating</option>
                <option>title</option>
            </select>
        </div>


    </div>
)

export default DDList