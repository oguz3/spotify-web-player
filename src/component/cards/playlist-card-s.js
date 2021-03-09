import { NavLink } from "react-router-dom";
import TextBoldL from '../text/text-bold-l';
import * as Icons from '../icons';

import styles from "./playlist-card-s.module.css";

function PlaylistCardS({path, imgUrl, title, hoverColor}){

    function changeTheme(){
        document.documentElement.style.setProperty('--hover-home-bg', hoverColor);
    }

    return (
        <NavLink to={path} onMouseOver={changeTheme}>
            <div className={styles.PlaylistCardS}>
                <div className={styles.ImgBox}>
                    <img src={imgUrl} alt={`${title}`} />
                </div>
                <div className={styles.Title}>
                    <TextBoldL>{title}</TextBoldL>
                    <div className={styles.IconBox}>
                        <button>
                            <Icons.Play />
                        </button>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default PlaylistCardS;