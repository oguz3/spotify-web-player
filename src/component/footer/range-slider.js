import styles from "./range-slider.module.css";

function RangeSlider({value, minvalue, maxvalue}){
    return (
        <div className={styles.progressBar}>
            <input type="range" className={styles.range__slider} min={minvalue} max={maxvalue} step=".1" defaultValue={value} />
        </div>
    );
}

export default RangeSlider;