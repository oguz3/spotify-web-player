import { connect } from 'react-redux';
import { changeTrack } from '../../../actions';
import * as Icons from '../../icons';
import IconButton from '../../buttons/icon-button';
import PlayButton from '../../buttons/play-button';

import { PLAYLIST } from "../../../data/index";
import styles from "./music-control-box.module.css";

function MusicControlBox(props){

    function decreaseIndex(){
        if(props.trackData.trackKey[1] == 0){ }else{
            props.changeTrack([props.trackData.trackKey[0], props.trackData.trackKey[1]-1])
        }
    }
    function increaseIndex(){
        if(props.trackData.trackKey[1] == (PLAYLIST[props.trackData.trackKey[0]].playlistData.length)-1){ }else{
            props.changeTrack([props.trackData.trackKey[0], parseInt(props.trackData.trackKey[1])+1])
        }
    }

    return (
        <div className={styles.musicControl}>
            <IconButton icon={<Icons.Mix />} activeicon={<Icons.Mix />}/>
            <button className={styles.button} onClick={decreaseIndex}>
                <Icons.Prev />
            </button>
            <PlayButton isthisplay={true}/>
            <button className={styles.button} onClick={increaseIndex}>
                <Icons.Next />
            </button>
            <IconButton icon={<Icons.Loop />} activeicon={<Icons.Loop />}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      trackData: state.trackData
    };
};
  
export default connect(mapStateToProps, { changeTrack })(MusicControlBox);