import React from 'react';
import FooterCSS from '../Footer/Footer.module.css';
import LogoCSS from "../Header/Logo/Logo.module.css";

const Footer = (props) => (
    <div className={FooterCSS.footer_container}>
        <div className={`${FooterCSS.div_footer_box} ${FooterCSS.div_footer}`}>
            <span className={LogoCSS.h1_prefix}>{props.prefix}</span>{props.postfix}
        </div>
    </div>
)
export default Footer