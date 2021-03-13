import { Link } from "react-router-dom";
import TextBoldL from '../text/text-bold-l';
import * as Icons from '../icons';

import styles from "./playlist-card-s.module.css";

function PlaylistCardS({data, isPlaying, setIsPlaying}){

    function changeTheme(){
        document.documentElement.style.setProperty('--hover-home-bg', data.hoverColor);
    }

    return (
        <Link to={`/playlist/${data.link}`} onMouseOver={changeTheme}>
            <div className={styles.PlaylistCardS}>
                <div className={styles.ImgBox}>
                    <img src={data.imgUrl} alt={`${data.title}`} />
                </div>
                <div className={styles.Title}>
                    <TextBoldL>{data.title}</TextBoldL>
                    <div className={styles.IconBox}>
                        <button onClick={() => setIsPlaying(!isPlaying)}>
                            <Icons.Play />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PlaylistCardS;