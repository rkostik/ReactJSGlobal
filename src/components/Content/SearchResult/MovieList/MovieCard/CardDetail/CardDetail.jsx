import React from 'react';
import styles from './CardDetail.module.css';
import PropTypes from 'prop-types';

const CardDetail = (props) => (
    <div className={styles.card_container}>
        <div className={styles.card_name}>{props.item.title}</div>
        <div className={styles.card_year}><div className={styles.style_year}>{props.item.year}</div></div>
    </div>
)

CardDetail.propTypes={
    item: PropTypes.shape({
        title: PropTypes.string,
        year: PropTypes.string
    })

}

export default CardDetail