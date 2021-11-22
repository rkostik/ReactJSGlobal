import React, {useEffect} from 'react';
import Header from './Header.jsx';
import HeaderDetail from './HeaderDetail/HeaderDetail.jsx';
import {useSelector} from 'react-redux';
import {useLocation, useParams} from "react-router-dom";
import {searchMovieClick} from "../../store/actions/actionCreators";
import {useDispatch} from 'react-redux';

const HeaderContent = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    let {searchQuery} = useParams();

    useEffect(() => {
        location.pathname === '/search' ? dispatch(searchMovieClick()) : dispatch(searchMovieClick(searchQuery));
    }, [location.pathname]);
    const viewActive = useSelector(state => state.viewActive)
    return (
        <>
            {
                viewActive ? <Header/> : <HeaderDetail/>
            }
        </>
    )
}

export default HeaderContent