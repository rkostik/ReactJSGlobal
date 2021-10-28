import React, {useCallback} from 'react';
import styles from '../Filter.module.css';
import DDList from '../../../DDList/DDList.jsx';
import PropTypes from "prop-types";
import {CONST_ARR} from '../../../../../const.js';

const FilterItemSort = (props) => {
    return   (
        <div
            className={`${styles.filter_item} ${(props.name === CONST_ARR.SORT_LIST[0]) ? `${styles.item_opacity}` : `${styles.non_sort}`}`}
            >
            {(props.name) === 'na' ? <DDList/> : props.name}
        </div>
    )
}

FilterItemSort.propTypes= {
    name: PropTypes.string
}

export default FilterItemSort