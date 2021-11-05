import React, {useCallback} from 'react';
import styles from '../Filter.module.css';
import DDList from '../../../DDList/DDList.jsx';
import PropTypes from "prop-types";
import {useDispatch} from 'react-redux';
import {filterClick} from '../../../../../store/actions/actionCreators.js';
import {CONST_ARR} from '../../../../../const.js';

const FilterItem = (props) => {
    const dispatch = useDispatch();
    const onFilterClick = useCallback(() => {
        dispatch(filterClick(props.name));
    }, []);
 return   (
        <div
            className={`${styles.filter_item} ${styles.non_sort}`}
            onClick={()=>onFilterClick()}>
            {props.name}
        </div>
    )
}

FilterItem.propTypes= {
    name: PropTypes.string
}

export default FilterItem