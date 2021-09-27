import React from 'react';
import SortCSS from './Sort.module.css';
import FilterItem from "../Filter/FilterItem/FilterItem.jsx";
import PropTypes from 'prop-types';

const Sort = (props) => (
    <div className={SortCSS.sort_container}>
        {props.list.map((elem, index) => {
            return  <FilterItem key={index} name={elem}/>
        })}
    </div>
)

Sort.proptypes ={
    list:PropTypes.array
}

export default Sort