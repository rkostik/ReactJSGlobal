import React from 'react';
import FilterCSS from './Filter.module.css';
import FilterItem from "./FilterItem/FilterItem.jsx";
import PropTypes from 'prop-types';

const Filter = (props) => (
    <div className={FilterCSS.filter_container}>
        {props.list.map((elem,index) => {
          return  <FilterItem key={index} name={elem}/>
        })}
    </div>
)

Filter.proptypes ={
    list:PropTypes.array
}
export default Filter
