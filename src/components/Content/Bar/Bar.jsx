import React from 'react';
import styles from './Bar.module.css';
import Filter from './Filter/Filter.jsx';
import Sort from './Sort/Sort.jsx';
import PropTypes from "prop-types";

const Bar = (props) => (
    <div className={styles.bar_container}>
        <Filter/>
        <Sort/>
    </div>
)

Bar.propTypes = {
    filter_list: PropTypes.arrayOf(PropTypes.string.isRequired),
    sort_list: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Bar