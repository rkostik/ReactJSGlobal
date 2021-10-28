import React from 'react';
import Header from './Header.jsx';
import HeaderDetail from './HeaderDetail/HeaderDetail.jsx';
import {useSelector} from 'react-redux';


const HeaderContent = () => {
    const viewActive =useSelector(state=>state.viewActive)
    return(
        <>
            {
                viewActive   ? <Header/> : <HeaderDetail/>
            }
        </>
    )
}
export default HeaderContent