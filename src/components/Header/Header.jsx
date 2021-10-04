import React from 'react';
import Logo from "./Logo/Logo.jsx";
import styles from './Header.module.css';
import BtnAdd from "./BtnAdd/BtnAdd.jsx";
import Search from "./Search/Search.jsx";
import PropTypes from "prop-types";



const Header = (props) => (
    <div className={styles.head}>
        <Logo prefix={props.arrConst.PREFIX_LOGO} postfix={props.arrConst.POSTFIX_LOGO}/>
        <BtnAdd textAdd={props.arrConst.BTN_ADD_TXT} addClick={props.addClick}/>
        <Search placeholder={props.arrConst.SEARCH_PLACEHOLDER} text={props.arrConst.SEARCH_BTN_TXT} title={props.arrConst.SEARCH_TITLE}/>
    </div>
)

Header.propTypes ={
    arrConst: PropTypes.objectOf(PropTypes.string)
}

export default Header