import * as Icons from '../../icons';
import IconButton from '../../buttons/icon-button';
import PlayButton from '../../buttons/play-button';

import styles from "./music-control-box.module.css";

function MusicControlBox({isPlaying, setIsPlaying }){
    return (
        <div className={styles.musicControl}>
            <IconButton icon={<Icons.Mix />} activeicon={<Icons.Mix />}/>
            <IconButton icon={<Icons.Prev />} activeicon={<Icons.Prev />}/>
            <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            <IconButton icon={<Icons.Next />} activeicon={<Icons.Next />}/>
            <IconButton icon={<Icons.Loop />} activeicon={<Icons.Loop />}/>
        </div>
    );
}

export default MusicControlBox;