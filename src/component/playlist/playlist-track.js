import React, { useState } from "react";
import TextBoldL from "../text/text-bold-l";
import TextRegularM from "../text/text-regular-m";
import Playgif from '../../image/now-play.gif';
import * as Icons from '../icons';

import styles from "./playlist-track.module.css";

function PlaylistTrack({isPlaying, setIsPlaying, song}) {
    const [thisSong, setthisSong] = useState(false);
    
    setInterval(function(){
        setthisSong(song.songUrl == localStorage.getItem('playedSong'));
    }, 50);
    
	return (
		<div 
            className={`${styles.trackDiv} ${thisSong ? "activeTrack" : ""}`}
            style={
                song.listType === "albüm" 
                    ? {gridTemplateColumns: '16px 1fr 38px'} 
                    : {}
            }
        >   
            <button
                className={styles.playBtn}
                onClick={() => {setIsPlaying(!isPlaying)}}
            >
                {thisSong 
                    ? <Icons.Pause /> 
                    : <Icons.Play />
                }
            </button>

            {thisSong 
                    ? <img className={styles.gif} src={Playgif} /> 
                    : <p className={styles.SongIndex}>{song.index}</p>
            }

			{song.listType === "albüm" ? "" : <img src={song.songimg} />}

			<span>
				<TextBoldL>{song.songName}</TextBoldL>
				<TextRegularM>{song.songArtist}</TextRegularM>
			</span>

			<p>{song.trackTime}</p>
		</div>
	);
}

export default PlaylistTrack;
