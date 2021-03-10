import React, { useRef, useEffect, useState } from 'react';

import FooterLeft from './footer-left';
import MusicControlBox from './player/music-control-box';
import MusicProgressBar from './player/music-progress-bar';
import FooterRight from './footer-right';
import Audio from './audio';

import styles from "./footer.module.css";

function Footer({isPlaying, setIsPlaying, track, trackName, trackImg, trackArtist, trackKey, setTrack, setTrackKey, setTrackName, setTrackImg, setTrackArtist }){
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);
    const [index, setIndex] = useState(0);

    const handleTrackClick = (position) => {
        audioRef.current.currentTime = position;
    };

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
    }, [audioRef, isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [audioRef, volume]);

    return (
        <footer className={styles.footer}>
            <div className={styles.nowplayingbar}>
                <FooterLeft 
                    trackName={trackName} 
                    trackImg={trackImg} 
                    trackArtist={trackArtist}
                />
                <div className={styles.footerMid}>
                    <MusicControlBox 
                        isPlaying={isPlaying} 
                        setIsPlaying={setIsPlaying} 
                        trackKey={trackKey}
                        setTrack={setTrack}
                        setTrackKey={setTrackKey}
                        setTrackName={setTrackName}
                        setTrackImg={setTrackImg}
                        setTrackArtist={setTrackArtist}
                    />
                    <MusicProgressBar 
                        currentTime={currentTime} 
                        duration={duration} 
                        handleTrackClick={handleTrackClick}
                    />
                    <Audio
                        track={track}
                        ref={audioRef}
                        handleDuration={setDuration}
                        handleCurrentTime={setCurrentTime}
                        isPlaying={isPlaying} 
                    />
                </div>
                <FooterRight 
                    volume={volume} 
                    setVolume={setVolume}
                />
            </div>
        </footer>
    );
}

export default Footer;