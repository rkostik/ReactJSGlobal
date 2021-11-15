import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => (
    <div className={styles.wrap_text}>
        <div className={styles.icon_block}>
            <img src='images/404.png' alt=''/>
        </div>
       <h2 className={styles.block_404}>404</h2>
        <h2>Page not found</h2>
    </div>
)

export default NotFound