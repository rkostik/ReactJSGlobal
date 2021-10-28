import React, {useCallback} from 'react';
import styles from './DDMenu.module.css'
import {useDispatch,useSelector} from 'react-redux';
import {ddmCloseClick, editClick, deleteClick} from "../../../store/actions/actionCreators";

const DDMenu = (props) => {
    const ddmActive =useSelector(state=>state.ddmActive);
    const item =useSelector(state=>state.item);
    const dispatch =useDispatch();
    const onDeleteClick = useCallback(() => {
        dispatch(deleteClick(ddmActive));
    }, []);
    const onCloseClick = useCallback(() => {
        dispatch(ddmCloseClick());
    }, []);
    const onEditClick = useCallback(() => {
        dispatch(editClick());
    }, []);
    return(
        <div
            className={`${styles.ddm_block} ${ddmActive && item === props.ddmKey ? styles.active : styles.nonactive}`}>
            <div className={styles.close} onClick={()=>onCloseClick()}/>
            <div className={styles.ddm_item} onClick={()=>onEditClick()}>
                <div className={styles.ddm_txt}>Edit</div>
            </div>
            <div className={styles.ddm_item} onClick={()=>onDeleteClick()}>
                <div className={styles.ddm_txt}>Delete</div>
            </div>
        </div>
    )
}

export default DDMenu