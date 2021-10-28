import React, {useCallback} from 'react';
import styles from '../Confirmation.module.css';
import {CONST_LIST} from '../../../const.js'
import Confirmation from '../Confirmation.jsx';
import BtnConfirm from '../BtnConfirm/BtnConfirm.jsx';
import {useDispatch} from 'react-redux';
import {closeDelWindowClick} from '../../../store/actions/actionCreators';


const Removal = () => {
    const dispatch =useDispatch();
    const onCloseDelWindowClick = useCallback(() => {
        dispatch(closeDelWindowClick());
    }, []);
   return (
        <Confirmation closeClick={()=>onCloseDelWindowClick()}>
            <div className={`${styles.content_title} ${styles.content_title_removal}`}>{CONST_LIST.REMOVAL_TITLE}</div>
            <div className={`${styles.content_text} ${styles.content_text_removal}`}>{CONST_LIST.REMOVAL_TEXT}</div>
            <BtnConfirm/>
        </Confirmation>
    )
}

export default Removal