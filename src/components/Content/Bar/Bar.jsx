import React from 'react';
import styles from './Bar.module.css';
import Filter from '../Filter/Filter.jsx';
import Sort from '../Sort/Sort.jsx';
import PropTypes from "prop-types";

const Bar = (props) => (
    <div className={styles.bar_container}>
        <Filter list={props.filter_list}/>
        <Sort list={props.sort_list}/>
    </div>
)

Bar.propTypes = {
    filter_list: PropTypes.arrayOf(PropTypes.string),
    sort_list: PropTypes.arrayOf(PropTypes.string)
}

export default Bar