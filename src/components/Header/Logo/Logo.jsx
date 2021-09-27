import React from 'react';
import LogoCSS from './Logo.module.css';
import PropTypes from 'prop-types';

const Logo = (props)=>(
    <h1 className={`${LogoCSS.h1_logo} ${LogoCSS.h1_box}`}>
        <span className={LogoCSS.h1_prefix}>{props.prefix}</span>{props.postfix}
    </h1>

)

Logo.propTypes={
    prefix: PropTypes.string,
    postfix: PropTypes.string
}

export default Logo