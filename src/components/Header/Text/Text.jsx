import React from 'react';
import TxtCSS from './Text.module.css';
import PropTypes from 'prop-types';

const Text = (props) =>
     (
         <div className={TxtCSS.btn_txt} onClick={props.onClick}>
              {props.text}
         </div>
     )

Text.propTypes ={
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Text