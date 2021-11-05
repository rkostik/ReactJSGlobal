import React, {Component, useCallback} from "react";
import {default as ReactSelect} from "react-select";
import {components} from "react-select";
import {useDispatch, useSelector} from 'react-redux';
import styles from './DropDownList.module.css';
import {DDL_GENRE} from '../../const.js';
import {changeSelect} from '../../store/actions/actionCreators.js';

export const genreOptions = [
    {value: "crime", label: "Crime"},
    {value: "documentary", label: "Documentary"},
    {value: "horror", label: "Horror"},
    {value: "comedy", label: "Comedy"}
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.selectProps.isSelected ? '#F65261' : null,
        backgroundColor: '#323232'
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return {...provided, opacity, transition};
    },
    dropdownIndicator: (provided, state) => ({
        ...provided,
        backgroundColor: '#323232',
        color: '#F65261',
        transition: 'all .2s ease',
        transform: state.isFocused ? 'rotate(180deg)' : null,
        marginRight: '10px'
    }),
    container:(provided, state) => ({
        ...provided,
        fontFamily: 'Montserrat-Regular',
        width: state.selectProps.width
    }),
    control:(provided, state) => ({
        ...provided,
        backgroundColor: '#323232',
        color: '#F65261',
        border: 0,
        boxShadow: 'none',
        "&:hover": {
            cursor: 'pointer'
        }
    }),
    menuList:(provided, state) => ({
        ...provided,
        backgroundColor: '#323232'
    }),
    valueContainer:(provided, state) => ({
        ...provided,
        backgroundColor: '#323232',
        color: '#F65261',
        fontFamily: 'Montserrat-Regular',
        fontSize: '20px',
        lineHeight: '24px',
        height: state.selectProps.height
    }),
    indicatorSeparator:(provided, state) => ({
        ...provided,
       backgroundColor: '#323232'
    })
}

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <span className={styles.genreList}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                    <label className={styles.label}>{props.label}</label>
                    </span>
            </components.Option>
        </div>
    );
};

const DropDownList = (props) => {
    const dispatch = useDispatch();
    const isSelected = useSelector(state => state.isSelected);
    const optionSelected = useSelector(state=>state.optionSelected);
    const onChangeSelect = useCallback((value) => {
        value.length===0?value[0]='':props.setFieldValue('genre', value[0].label);
        dispatch(changeSelect(value));
    }, []);
    return (
        <ReactSelect
            styles={customStyles}
            color='#323232'
            isSelected={isSelected}
            width={DDL_GENRE.Width}
            height={DDL_GENRE.Height}
            placeholder = 'Select genre'
            options={genreOptions}
            isMulti
            closeMenuOnSelect={true}
            hideSelectedOptions={true}
            components={{
                Option
            }}
            onChange={onChangeSelect}
            allowSelectAll={true}
            value={optionSelected}
        />
    );
}


export default DropDownList