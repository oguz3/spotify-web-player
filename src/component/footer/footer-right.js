import * as Icons from '../icons';
import RangeSlider from './range-slider';

import styles from "./footer-right.module.css";

function FooterRight(){
    return (
        <div className={styles.footerRight}>
            <AddList />
            <Connect />
            <SoundLevel />
        </div>
    );
}

function AddList(){
    return (
        <div className={styles.addList}>
            <Icons.Mix />
        </div>
    );
}

function Connect(){
    return (
        <div className={styles.connect}>
            <Icons.DownloadApp />
        </div>
    );
}

function SoundLevel(){
    return (
        <div className={styles.soundBar}>
            <Icons.Sound />
            <RangeSlider value="90"/>
        </div>
    );
}

export default FooterRight;