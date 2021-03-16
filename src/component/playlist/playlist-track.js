import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { changePlay } from '../../actions';
import TextBoldL from "../text/text-bold-l";
import TextRegularM from "../text/text-regular-m";
import Playgif from '../../image/now-play.gif';
import * as Icons from '../icons';

import styles from "./playlist-track.module.css";

function PlaylistTrack(props) {
    const [thisSong, setthisSong] = useState(false);

    /*setInterval(function(){
        setthisSong(props.data.song.link == localStorage.getItem('playedSong'));
    }, 50);*/
    
    useEffect(() => {
        if(props.data.song.link === props.trackData.track && props.isPlaying === true){
            setthisSong(true)
        }else {
            setthisSong(false)
        }
	})
    
	return (
		<div 
            className={`${styles.trackDiv} ${thisSong ? "activeTrack" : ""}`}
            style={
                props.data.listType === "albüm" 
                    ? {gridTemplateColumns: '16px 1fr 38px'} 
                    : {}
            }
        >   
            <button
                className={styles.playBtn}
                onClick={() => props.changePlay(!props.isPlaying)}
            >
                {thisSong 
                    ? <Icons.Pause /> 
                    : <Icons.Play />
                }
            </button>

            {thisSong 
                    ? <img className={styles.gif} src={Playgif} /> 
                    : <p className={styles.SongIndex}>{props.data.song.index}</p>
            }

			{props.data.listType === "albüm" ? "" : <img src={props.data.song.songimg} />}

			<span>
				<TextBoldL>{props.data.song.songName}</TextBoldL>
				<TextRegularM>{props.data.song.songArtist}</TextRegularM>
			</span>

			<p>{props.data.song.trackTime}</p>
		</div>
	);
}


const mapStateToProps = (state) => {
	return {
		isPlaying: state.isPlaying,
        trackData: state.trackData
	};
};
  
export default connect(mapStateToProps, { changePlay })(PlaylistTrack);