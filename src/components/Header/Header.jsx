import React from 'react';
import Logo from "./Logo/Logo.jsx";
import styles from './Header.module.css';
import BtnAdd from "./BtnAdd/BtnAdd.jsx";
import Search from "./Search/Search.jsx";



const Header = (props) => (
    <div className={styles.head}>
        <Logo prefix={props.prefix} postfix={props.postfix}/>
        <BtnAdd textAdd={props.textAdd}/>
        <Search placeholder={props.placeholder} text={props.text} title={props.title}/>
    </div>
)



export default Header