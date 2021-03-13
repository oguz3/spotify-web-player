import React, { useState, useEffect } from "react";
import TextBoldL from "../text/text-bold-l";
import TextRegularM from "../text/text-regular-m";
import Playgif from '../../image/now-play.gif';
import * as Icons from '../icons';

import styles from "./playlist-track.module.css";

function PlaylistTrack({isPlaying, setIsPlaying, data}) {
    const [thisSong, setthisSong] = useState(false);

    //Burası için daha iyi bir çözüm bulamadım.
    //Bu çözüm iyi olmadı.
    setInterval(function(){
        setthisSong(data.song.link == localStorage.getItem('playedSong'));
    }, 50);
    
	return (
		<div 
            className={`${styles.trackDiv} ${thisSong ? "activeTrack" : ""}`}
            style={
                data.listType === "albüm" 
                    ? {gridTemplateColumns: '16px 1fr 38px'} 
                    : {}
            }
        >   
            <button
                className={styles.playBtn}
                onClick={() => {{setIsPlaying(!isPlaying)}}}
            >
                {thisSong 
                    ? <Icons.Pause /> 
                    : <Icons.Play />
                }
            </button>

            {thisSong 
                    ? <img className={styles.gif} src={Playgif} /> 
                    : <p className={styles.SongIndex}>{data.song.index}</p>
            }

			{data.listType === "albüm" ? "" : <img src={data.song.songimg} />}

			<span>
				<TextBoldL>{data.song.songName}</TextBoldL>
				<TextRegularM>{data.song.songArtist}</TextRegularM>
			</span>

			<p>{data.song.trackTime}</p>
		</div>
	);
}

export default PlaylistTrack;
