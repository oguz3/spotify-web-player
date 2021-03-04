import * as Icons from '../icons';
import RangeSlider from './range-slider';
import IconButton from '../buttons/icon-button';
import TextRegularM from '../text/text-regular-m';

import styles from "./footer-mid.module.css";

function FooterMid(){
    return (
        <div className={styles.footerMid}>
            <MusicControl />
            <MusicProgress />
        </div>
    );
}

function MusicControl(){
    return (
        <div className={styles.musicControl}>
            <IconButton icon={<Icons.Mix />} activeicon={<Icons.Mix />}/>
            <IconButton icon={<Icons.Prev />} activeicon={<Icons.Prev />}/>
            <button className={styles.playBtn}>
                <IconButton icon={<Icons.Play />} activeicon={<Icons.Play />}/>
            </button>
            <IconButton icon={<Icons.Next />} activeicon={<Icons.Next />}/>
            <IconButton icon={<Icons.Loop />} activeicon={<Icons.Loop />}/>
        </div>
    );
}

function MusicProgress(){
    return (
        <div className={styles.musicProgress}>
            <span><TextRegularM>0:01</TextRegularM></span>
            <RangeSlider value="1" minvalue="0" maxvalue="228"/>
            <span><TextRegularM>3:48</TextRegularM></span>
        </div>
    );
}

export default FooterMid;