import React from 'react';
import styles from '../Filter.module.css';
import DDList from '../../DDList/DDList.jsx';
import PropTypes from "prop-types";


const FilterItem = (props) => (
    <div className={`${styles.filter_item} ${(props.name==='sort by') ? `${styles.item_opacity}`:`${styles.non_sort}`}`}>
        {(props.name)==='na'? <DDList/>:props.name}
    </div>
)

FilterItem.propTypes= {
    name: PropTypes.string
}

export default FilterItem