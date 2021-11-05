import React, {useCallback} from 'react';
import Button from '../../Button/Button.jsx';
import {useDispatch, useSelector} from "react-redux";
import {confirmDel} from "../../../store/actions/actionCreators";

const BtnConfirm = () => {
    const item=useSelector(state=>state.item);
    const movies=useSelector(state=>state.movies);
    const dispatch =useDispatch();
    const onConfirmDel = useCallback((val) => {
        dispatch(confirmDel(val));
    }, []);
    return(
    <Button btn_block_style='btn_block_coral' btn_style='btn_confirm' txt_style='txt_confirm' textBtn='confirm' onDelClick={() => onConfirmDel(movies[item].id)}/>
)}

export default BtnConfirm