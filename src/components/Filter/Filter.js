import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import s from './Filter.module.css';

const searchInputId = nanoid();

const Filter = ({value, onChange}) => {
    return (
        <div className={s.wrapper}>
            <label htmlFor={searchInputId} className={s.label}>Find contacts by name</label>
            <input
                id={searchInputId}
                className={s.input}
                type='text'
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;