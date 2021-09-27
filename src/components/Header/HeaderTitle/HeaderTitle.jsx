import React from 'react';
import HeaderTitleCSS from './HeaderTitle.module.css';
import PropTypes from 'prop-types';

const HeaderTitle = (props)=>(
    <h1 className={HeaderTitleCSS.header_txt}>
        {props.text}
    </h1>
)

HeaderTitle.propTypes={
    text: PropTypes.string
}
export default HeaderTitle