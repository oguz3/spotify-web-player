import * as Icons from '../../icons';
import IconButton from '../../buttons/icon-button';
import PlayButton from '../../buttons/play-button';

import { PLAYLIST } from "../../../data/index";
import styles from "./music-control-box.module.css";

function MusicControlBox({isPlaying, setIsPlaying, trackKey, setTrack, setTrackKey, setTrackName, setTrackImg, setTrackArtist }){

    function decreaseIndex(){
        let keys = trackKey.split("-");
        if(keys[1] == 0){ }else{
            setTrack(PLAYLIST[keys[0]].playlistData[keys[1]-1].link)
            setTrackName(PLAYLIST[keys[0]].playlistData[keys[1]-1].songName);
            setTrackImg(PLAYLIST[keys[0]].playlistData[keys[1]-1].songimg);
            setTrackArtist(PLAYLIST[keys[0]].playlistData[keys[1]-1].songArtist);
    
            setTrackKey(`${keys[0]}-${keys[1]-1}`);
        }
    }
    function increaseIndex(){
        let keys = trackKey.split("-");
        if(keys[1] == (PLAYLIST[keys[0]].playlistData.length)-1){ }else{
            setTrack(PLAYLIST[keys[0]].playlistData[parseInt(keys[1])+1].link)
            setTrackName(PLAYLIST[keys[0]].playlistData[parseInt(keys[1])+1].songName);
            setTrackImg(PLAYLIST[keys[0]].playlistData[parseInt(keys[1])+1].songimg);
            setTrackArtist(PLAYLIST[keys[0]].playlistData[parseInt(keys[1])+1].songArtist);
    
            setTrackKey(`${keys[0]}-${parseInt(keys[1])+1}`);
        }
    }

    return (
        <div className={styles.musicControl}>
            <IconButton icon={<Icons.Mix />} activeicon={<Icons.Mix />}/>
            <button className={styles.button} onClick={decreaseIndex}>
                <Icons.Prev />
            </button>
            <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            <button className={styles.button} onClick={increaseIndex}>
                <Icons.Next />
            </button>
            <IconButton icon={<Icons.Loop />} activeicon={<Icons.Loop />}/>
        </div>
    );
}

export default MusicControlBox;