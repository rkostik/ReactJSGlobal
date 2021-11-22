import React from 'react';
import Logo from "./Logo/Logo.jsx";
import styles from './Header.module.css';
import BtnAdd from "./BtnAdd/BtnAdd.jsx";
import Search from "./Search/Search.jsx";
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';


const Header = () => {
    return(
    <div className={styles.wrap}>
        <div className={styles.head}>
            <Logo/>
            <BtnAdd/>
            <Search/>
        </div>
     </div>
)
}

Header.propTypes = {
    arrConst: PropTypes.objectOf(PropTypes.string)
}

export default Header