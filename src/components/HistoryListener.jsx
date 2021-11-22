import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const HistoryListener = ({
                             children,
                             someAction,
                         }) => {
    const history = useHistory();
   useEffect(() => {
        return history.listen((location) => {
        });
    }, [history]);

    // if is the first time render, show loading
/*    if (isFirstRender) {
        return <p>Loading...</p>;
    }*/

    return children;
};

export default HistoryListener;

