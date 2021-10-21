import React from "react";
import {CONST_LIST} from '../../const.js';

const ErrorBoundry =(props) =>{
    const ErrTxt = () =>(
        <h1>
            {CONST_LIST.ERROR_MESSAGE}
        </h1>
    )

    let isError = false;
    return <>{isError ? <ErrTxt/> :props.children}</>
}

export default ErrorBoundry