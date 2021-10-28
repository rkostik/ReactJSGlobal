import React from 'react';
import styles from './Filter.module.css';
import FilterItem from "./FilterItem/FilterItem.jsx";
import PropTypes from 'prop-types';
import {CONST_ARR} from '../../../../const.js'

const Filter = () => (
    <div className={styles.filter_container}>
        {CONST_ARR.FILTER_LIST.map((elem,index) => {
          return  <FilterItem key={index} name={elem}/>
        })}
    </div>
)

Filter.proptypes ={
    list:PropTypes.array
}
export default Filter
