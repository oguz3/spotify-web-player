import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '../icons';
import IconButton from '../buttons/icon-button';

import styles from './play-button.module.css'

function PlayButton({ isPlaying, setIsPlaying }) {
        return (
            <div className={styles.playBtn} tabIndex="0" role="button" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying
                    ? <IconButton icon={<Icons.Profile />} activeicon={<Icons.Profile />}/>
                    : <IconButton icon={<Icons.Play />} activeicon={<Icons.Play />}/>
                }
            </div>
        );
}

PlayButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
};

export default PlayButton;