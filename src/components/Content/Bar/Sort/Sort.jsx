import React from 'react';
import styles from './Sort.module.css';
import FilterItemSort from "../Filter/FilterItem/FilterItemSort.jsx";
import PropTypes from 'prop-types';
import {CONST_ARR} from '../../../../const.js';

const Sort = () => (
    <div className={styles.sort_container}>
        {CONST_ARR.SORT_LIST.map((elem, index) => {
            return  <FilterItemSort key={index} name={elem} />
        })}
    </div>
)

Sort.proptypes ={
    list:PropTypes.array
}

export default Sort