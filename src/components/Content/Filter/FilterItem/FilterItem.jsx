import React from 'react';
import FilterCSS from '../Filter.module.css';

const FilterItem = (props) => (
    <div className={`${FilterCSS.filter_item} ${(props.name==='sort by') ? FilterCSS.item_opacity:null}`}>
        {props.name}
    </div>
)
export default FilterItem