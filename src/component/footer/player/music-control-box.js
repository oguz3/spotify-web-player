import * as Icons from '../../icons';
import IconButton from '../../buttons/icon-button';
import PlayButton from '../../buttons/play-button';

import { PLAYLIST } from "../../../data/index";
import styles from "./music-control-box.module.css";

function MusicControlBox({isPlaying, setIsPlaying, setTrackData, trackData }){

    function decreaseIndex(){
        if(trackData.trackKey[1] == 0){ }else{
            setTrackData({
                ...trackData,
                trackKey: [trackData.trackKey[0], trackData.trackKey[1]-1],
            });
        }
    }
    function increaseIndex(){
        if(trackData.trackKey[1] == (PLAYLIST[trackData.trackKey[0]].playlistData.length)-1){ }else{
            setTrackData({
                ...trackData,
                trackKey: [trackData.trackKey[0], parseInt(trackData.trackKey[1])+1],
            });
        }
    }

    return (
        <div className={styles.musicControl}>
            <IconButton icon={<Icons.Mix />} activeicon={<Icons.Mix />}/>
            <button className={styles.button} onClick={decreaseIndex}>
                <Icons.Prev />
            </button>
            <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} isthisplay={true}/>
            <button className={styles.button} onClick={increaseIndex}>
                <Icons.Next />
            </button>
            <IconButton icon={<Icons.Loop />} activeicon={<Icons.Loop />}/>
        </div>
    );
}

export default MusicControlBox;