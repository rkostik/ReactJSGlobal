import React from 'react';
import './Text.css';

const Text = (props) =>
     (
         <div className="btn-txt" onClick={props.onClick}>
              {props.name}
         </div>
     )

export default Text