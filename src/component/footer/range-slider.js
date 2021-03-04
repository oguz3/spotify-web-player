import PropTypes from 'prop-types';

import styles from "./range-slider.module.css";

function RangeSlider({value, minvalue, maxvalue, handleChange}){

    const handleInputChange = (e) => {
        handleChange(parseFloat(e.target.value));
    };

    return (
        <div className={styles.progressBar}>
            <input type="range" onChange={handleInputChange} className={styles.range__slider} min={minvalue} max={maxvalue} step="0.01" value={value} />
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