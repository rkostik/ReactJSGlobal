import React from 'react';
import styles from '../Filter.module.css';
import PropTypes from "prop-types";


const FilterItem = (props) => (
    <div className={`${styles.filter_item} ${(props.name==='sort by') ? styles.item_opacity:null}`}>
        {(props.name)==='na'?<img src='images/rd.png'/>:(props.name)}
    </div>
)

FilterItem.propTypes= {
    name: PropTypes.string
}

export default FilterItem