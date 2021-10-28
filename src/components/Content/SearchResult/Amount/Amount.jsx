import React from 'react';
import styles from './Amount.module.css';
import PropTypes from 'prop-types';
import {CONST_LIST} from '../../../../const.js';
import {useSelector} from 'react-redux';

const Amount = () => {
   const amount = useSelector(state=>state.amount)
  return  (
        <div className={styles.sr_text}>
            {amount}{CONST_LIST.SEARCH_RESULT}
        </div>
    )
}
Amount.propTypes = {
    amount: PropTypes.string,
    text: PropTypes.string
}

export default Amount