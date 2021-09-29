import React from "react";
import {CONST_ARR} from '../../const.js';

const ErrorBoundry =(props) =>{
    const ErrTxt = () =>(
        <h1>
            {CONST_ARR.ERROR_MESSAGE}
        </h1>
    )

    let isError = false;
    return <>{isError ? <ErrTxt/> :props.children}</>
}

export default ErrorBoundry