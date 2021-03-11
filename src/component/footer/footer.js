import React, { useRef, useEffect, useState } from 'react';

import FooterLeft from './footer-left';
import MusicControlBox from './player/music-control-box';
import MusicProgressBar from './player/music-progress-bar';
import FooterRight from './footer-right';
import Audio from './audio';

import styles from "./footer.module.css";

function Footer({isPlaying, setIsPlaying, trackData, setTrackData }){
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);

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

    useEffect(() => {
        audioRef.current.addEventListener('ended', () => {
            audioRef.current.currentTime = 0;
            audioRef.current.pause();
            setIsPlaying(false);
        })
    }, [audioRef]);

    return (
        <footer className={styles.footer}>
            <div className={styles.nowplayingbar}>
                <FooterLeft 
                    trackData={trackData}
                />
                <div className={styles.footerMid}>
                    <MusicControlBox 
                        isPlaying={isPlaying} 
                        setIsPlaying={setIsPlaying} 
                        trackData={trackData}
                        setTrackData={setTrackData}
                    />
                    <MusicProgressBar 
                        currentTime={currentTime} 
                        duration={duration} 
                        handleTrackClick={handleTrackClick}
                    />
                    <Audio
                        trackData={trackData}
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