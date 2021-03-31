import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import styles from "./range-slider.module.css";

function RangeSlider({value, minvalue, maxvalue, handleChange}){
    const inputRef = useRef(null)
    const inputRefWidth = useRef(null)

    useEffect(() => {
        const inputWidth = window.getComputedStyle(inputRef.current).width
        inputRefWidth.current = parseInt( inputWidth.replace('px',''))
    }, [])

    console.log(inputRefWidth.current)

    const handleInputChange = (e) => {
        handleChange(parseFloat(e.target.value));
    };

    return (
        <div className={styles.progressBar}>
            <input ref={inputRef} type="range" onChange={handleInputChange} className={styles.range__slider} min={minvalue} max={maxvalue} step="0.01" value={value} />
            <span
                className={styles.spanThumb}
                style={{left: `${value * inputRefWidth.current}px`}}
            >

            </span>
        </div>
    );
}

RangeSlider.propTypes = {
    maxvalue: PropTypes.number.isRequired,
    minvalue: PropTypes.number,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
};

export default RangeSlider;