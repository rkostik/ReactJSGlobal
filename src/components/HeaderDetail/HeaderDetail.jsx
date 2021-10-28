import React from 'react';
import LogoThin from "../Header/Logo/LogoThin.jsx";
import styles from './HeaderDetail.module.css';
import PropTypes from "prop-types";


const HeaderDetail = (props) => (
    <div className={styles.wrap_detail}>
        <div className={styles.detail_view}>
            <LogoThin prefix={props.arrConst.PREFIX_LOGO} postfix={props.arrConst.POSTFIX_LOGO}/>
            <div className={styles.round} onClick={props.onSearchClick}></div>
            <div className={styles.slash}></div>
            <div className={styles.movie_block}>
                <div className={styles.card_screen}>
                    <img src={props.arrCard.url} alt='Movie Screen'/>
                </div>
                <div className={styles.description_block}>
                    <div className={styles.title_block}>
                        <div className={styles.movie_title}>
                            <div>{props.arrCard.title}</div>
                        </div>
                        <div className={styles.rating}>
                            <div className={styles.rating_value}>{props.arrCard.rating}</div>
                        </div>
                    </div>
                    <div className={styles.genre_block}>
                        {props.arrCard.genre}
                    </div>
                    <div className={styles.param_block}>
                        <div>{props.arrCard.year}</div>
                        <div>{props.arrCard.runtime}</div>
                    </div>
                    <div className={styles.text_block}>
                        <div className={styles.txt}>{props.arrCard.description}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

HeaderDetail.propTypes = {
    arrConst: PropTypes.objectOf(PropTypes.string)
}

export default HeaderDetail