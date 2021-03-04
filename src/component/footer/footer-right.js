import * as Icons from '../icons';
import RangeSlider from './range-slider';
import IconButton from '../icons/icon-button';

import styles from "./footer-right.module.css";

function FooterRight(){
    return (
        <div className={styles.footerRight}>
            <IconButton icon={<Icons.Mix />} activeicon={<Icons.Mix />}/>
            <IconButton icon={<Icons.DownloadApp />} activeicon={<Icons.DownloadApp />}/>
            <SoundLevel />
        </div>
    );
}

function SoundLevel(){
    return (
        <div className={styles.soundBar}>
            <IconButton icon={<Icons.Sound />} activeicon={<Icons.SoundClose />}/>
            <RangeSlider value="90"/>
        </div>
    );
}


export default FooterRight;