import React from "react";
import {ERROR_MESSAGE} from '../../const.js';

const ErrorBoundry =(props) =>{
    const ErrTxt = () =>(
        <h1>
            {ERROR_MESSAGE}
        </h1>
    )

    let isError = false;
    return <>{isError ? <ErrTxt/> :props.children}</>
}

export default ErrorBoundry