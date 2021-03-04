import convertTime from '../../../functions/convertTime';

import TextRegularM from '../../text/text-regular-m';
import RangeSlider from '../range-slider';

import styles from "./music-progress-bar.module.css";

function MusicProgressBar({ currentTime, duration, handleTrackClick}){
    return (
        <div className={styles.musicProgress}>
            <span>
                <TextRegularM>{convertTime(currentTime)}</TextRegularM>
            </span>
            <RangeSlider value={currentTime} minvalue={0} maxvalue={duration} handleChange={handleTrackClick}/>
            <span>
                <TextRegularM>{convertTime(duration)}</TextRegularM>
            </span>
        </div>
    );
}

export default MusicProgressBar;