import React from 'react';
import { connect } from 'react-redux';
import { changePlay } from '../../actions';
import * as Icons from '../icons';
import IconButton from '../buttons/icon-button';

import styles from './play-button.module.css'

function PlayButton(props) {
        return (
            <div className={styles.playBtn} tabIndex="0" role="button" onClick={() => props.changePlay(!props.isPlaying)}>
                {props.isPlaying && props.isthisplay
                        ? <IconButton icon={<Icons.Pause />} activeicon={<Icons.Pause />}/>
                        : <IconButton icon={<Icons.Play />} activeicon={<Icons.Play />}/>
                }
            </div>
        );
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying
  };
};

export default connect(mapStateToProps, { changePlay })(PlayButton);