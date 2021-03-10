import { Link } from "react-router-dom";
import TextBoldL from "../text/text-bold-l";
import TextRegularM from '../text/text-regular-m';
import * as Icons from "../icons";

import styles from "./playlist-card-m.module.css";

function PlaylistCardM({ path, imgUrl, title, artist, isPlaying, setIsPlaying}) {
	return (
		<Link to={`/playlist/${path}`}>
			<div className={styles.PlaylistCardS}>
				<div className={styles.ImgBox}>
					<img src={imgUrl} alt={title} />
					<div className={styles.IconBox}>
                        <button onClick={() => setIsPlaying(!isPlaying)}>
                            <Icons.Play />
                        </button>
					</div>
				</div>
				<div className={styles.Title}>
					<TextBoldL>{title}</TextBoldL>
					<TextRegularM>{artist}</TextRegularM>
				</div>
			</div>
		</Link>
	);
}

export default PlaylistCardM;
