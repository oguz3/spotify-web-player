import styles from "./range-slider.module.css";

function RangeSlider({value}){
    return (
        <div className={styles.progressBar}>
            <input type="range" className={styles.range__slider} min="0" max="100" step=".1" defaultValue={value} />
        </div>
    );
}

export default RangeSlider;