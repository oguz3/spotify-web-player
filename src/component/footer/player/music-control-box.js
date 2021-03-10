import * as Icons from '../../icons';
import IconButton from '../../buttons/icon-button';
import PlayButton from '../../buttons/play-button';

import styles from "./music-control-box.module.css";

function MusicControlBox({isPlaying, setIsPlaying/*, musicIndex, setIndex, totalMusic*/ }){

    /*function decreaseIndex(){
        if(musicIndex == 0){ setIndex(totalMusic - 1) }
        else{ setIndex(musicIndex - 1) }
        setIsPlaying(false)
    }
    function increaseIndex(){
        if(musicIndex == (totalMusic - 1)){ setIndex(0) }
        else{ setIndex(musicIndex + 1) }
        setIsPlaying(false)
    }*/

    return (
        <div className={styles.musicControl}>
            <IconButton icon={<Icons.Mix />} activeicon={<Icons.Mix />}/>
            <button className={styles.button} /*onClick={decreaseIndex}*/>
                <Icons.Prev />
            </button>
            <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            <button className={styles.button} /*onClick={increaseIndex}*/>
                <Icons.Next />
            </button>
            <IconButton icon={<Icons.Loop />} activeicon={<Icons.Loop />}/>
        </div>
    );
}

export default MusicControlBox;