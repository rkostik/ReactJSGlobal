import React from 'react';
import BarCSS from './Bar.module.css';
import Filter from '../Filter/Filter.jsx';
import Sort from '../Sort/Sort.jsx';

const Bar = (props) => (
    <div className={BarCSS.bar_container}>
        <Filter list={props.filter_list}/>
        <Sort list={props.sort_list}/>
    </div>
)
export default Bar