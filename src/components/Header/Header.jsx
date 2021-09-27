import React from 'react';
import Logo from "./Logo/Logo.jsx";
import HeaderCSS from './Header.module.css';
import BtnAdd from "./BtnAdd/BtnAdd.jsx";
import TxtAdd from "./TxtAdd/TxtAdd.jsx";
import SearchInput from "./Search/SearchInput/SearchInput.jsx";
import {HEADER_TITLE, SEARCH_BTN_TXT, SEARCH_PLACEHOLDER} from '../../const.js';
import Button from "./Button/Button.jsx";
import Text from "./Text/Text.jsx";
import HeaderTitle from "./HeaderTitle/HeaderTitle.jsx";



const Header = () => (
    <div className={HeaderCSS.head}>
        <Logo prefix="netflix" postfix="roulette"/>
        <BtnAdd />
        <TxtAdd text="+add movie"/>
        <SearchInput title={SEARCH_PLACEHOLDER}/>
        <Button/>
        <Text text={SEARCH_BTN_TXT}/>
        <HeaderTitle text={HEADER_TITLE}/>
    </div>
)

export default Header