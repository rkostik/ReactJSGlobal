import React from 'react';
import styles from './Text.module.css';
import PropTypes from 'prop-types';

const Text = (props) =>
     (
         <div className={styles.btn_txt} onClick={props.onClick}>
              {props.text}
         </div>
     )

Text.propTypes ={
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Text