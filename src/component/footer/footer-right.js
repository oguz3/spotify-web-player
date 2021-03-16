import * as Icons from '../icons';
import RangeSlider from './range-slider';
import IconButton from '../buttons/icon-button';

import styles from "./footer-right.module.css";
import { useState } from 'react';

function FooterRight({ volume, setVolume }){
    return (
        <div className={styles.footerRight}>
            <IconButton icon={<Icons.Mix />} activeicon={<Icons.Mix />}/>
            <IconButton icon={<Icons.DownloadApp />} activeicon={<Icons.DownloadApp />}/>
            <SoundLevel volume={volume} setVolume={setVolume} />
        </div>
    );
}

function SoundLevel({ volume, setVolume }){
    const[lastVolume, setLastVolume] = useState(1);

    const soundBtn = () => {
        if(volume == 0){
            setVolume(lastVolume);
        }else{
            setLastVolume(volume);
            setVolume(0);
        }
    };

    return (
        <div className={styles.soundBar}>
            <div tabIndex="0" role="button" onClick={soundBtn}>
                <IconButton icon={<Icons.Sound />} activeicon={<Icons.SoundClose />}/>
            </div>
            <RangeSlider minvalue={0} maxvalue={1} value={volume} handleChange={setVolume}/>
        </div>
    );
}


export default FooterRight;