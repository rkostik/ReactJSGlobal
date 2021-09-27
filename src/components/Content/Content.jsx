import React from 'react';
import ContentCSS from './Content.module.css';
import Bar from "./Bar/Bar.jsx";
import {SORT_LIST, FILTER_LIST} from "../../const.js";
import Marker from "./Marker/Marker.jsx";
import SearchResult from "./SearchResult/SearchResult.jsx";

const Content = () => (
    <div className={ContentCSS.content_body}>
        <Bar sort_list={SORT_LIST} filter_list={FILTER_LIST}/>
        <Marker/>
        <SearchResult/>
    </div>
)
export default Content