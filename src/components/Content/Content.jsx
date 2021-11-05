import React from 'react';
import styles from './Content.module.css';
import Bar from './Bar/Bar.jsx';
import Marker from "./Marker/Marker.jsx";
import SearchResult from "./SearchResult/SearchResult.jsx";

const Content = () => (
    <div className={styles.content_body}>
        <Bar/>
        <Marker/>
        <SearchResult/>
    </div>
)
export default Content