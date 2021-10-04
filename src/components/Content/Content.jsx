import React from 'react';
import styles from './Content.module.css';
import Bar from './Bar/Bar.jsx';
import {CONST_ARR, CONST_LIST, MOVIES} from "../../const.js";
import Marker from "./Marker/Marker.jsx";
import SearchResult from "./SearchResult/SearchResult.jsx";

const Content = (props) => (
    <div className={styles.content_body}>
        <Bar sort_list={CONST_ARR.SORT_LIST} filter_list={CONST_ARR.FILTER_LIST}/>
        <Marker/>
        <SearchResult text={CONST_LIST.SEARCH_RESULT} amount={'6'} list={MOVIES} editClick={props.editClick}/>
    </div>
)
export default Content