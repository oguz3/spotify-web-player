import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeTrack, changePlay } from '../../actions';
import useWindowSize from '../../hooks/useWindowSize';
import FooterLeft from './footer-left';
import MusicControlBox from './player/music-control-box';
import MusicProgressBar from './player/music-progress-bar';
import FooterRight from './footer-right';
import Audio from './audio';

import { PLAYLIST } from "../../data/index";
import CONST from '../../constants/index';
import styles from "./footer.module.css";

function Footer(props){
    const size = useWindowSize();

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);

    const handleTrackClick = (position) => {
        audioRef.current.currentTime = position;
    };

    useEffect(() => {
        if (props.isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
    }, [audioRef, props.isPlaying]);

    /*useEffect(() => {
        if (props.isPlaying) {
          localStorage.setItem('playedSong', audioRef.current.currentSrc);
        } else {
          localStorage.setItem('playedSong', 'stop');
        }
    });*/

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [audioRef, volume]);

    
    useEffect(() => {
        audioRef.current.addEventListener('ended', () => {
            if(props.trackData.trackKey[1] === (PLAYLIST[props.trackData.trackKey[0]].playlistData.length)-1){
                props.changeTrack([props.trackData.trackKey[0], 0])
            }else{
                props.changeTrack([props.trackData.trackKey[0], parseInt(props.trackData.trackKey[1])+1])
            }
        })
    });

    return (
        <footer className={styles.footer}>
            <div className={styles.nowplayingbar}>
                <FooterLeft />
                <div className={styles.footerMid}>
                    <MusicControlBox />
                    <MusicProgressBar 
                        currentTime={currentTime} 
                        duration={duration} 
                        handleTrackClick={handleTrackClick}
                    />
                    <Audio
                        ref={audioRef}
                        handleDuration={setDuration}
                        handleCurrentTime={setCurrentTime}
                        trackData={props.trackData}
                        isPlaying={props.isPlaying}
                    />
                </div>
                {size.width > CONST.MOBILE_SIZE && 
                    <FooterRight 
                        volume={volume} 
                        setVolume={setVolume}
                    />
                }
            </div>
        </footer>
    );
}


const mapStateToProps = (state) => {
    return {
        trackData: state.trackData,
        isPlaying: state.isPlaying
    };
};
  
export default connect(mapStateToProps, { changeTrack, changePlay })(Footer);