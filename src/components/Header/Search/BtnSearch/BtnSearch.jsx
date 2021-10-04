import React from 'react';
import styles from './BtnSearch.module.css';
import PropTypes from "prop-types";

const BtnSearch = (props)=>(
        <div className={styles.div_btn}>
                <div className={styles.btn_txt} onClick={props.onClick}>
                        {props.text}
                </div>
        </div>
)

BtnSearch.propTypes ={
        onClick: PropTypes.func
}

export default BtnSearch