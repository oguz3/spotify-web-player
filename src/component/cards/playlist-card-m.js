import { Link } from "react-router-dom";
import TextBoldL from "../text/text-bold-l";
import TextRegularM from '../text/text-regular-m';
import * as Icons from "../icons";

import styles from "./playlist-card-m.module.css";

function PlaylistCardM({ data, isPlaying, setIsPlaying}) {
	return (
		<Link to={`/playlist/${data.link}`}>
			<div className={styles.PlaylistCardS}>
				<div className={styles.ImgBox}>
					<img src={data.imgUrl} alt={data.title} />
					<div className={styles.IconBox}>
                        <button onClick={() => setIsPlaying(!isPlaying)}>
                            <Icons.Play />
                        </button>
					</div>
				</div>
				<div className={styles.Title}>
					<TextBoldL>{data.title}</TextBoldL>
					<TextRegularM>{data.artist}</TextRegularM>
				</div>
			</div>
		</Link>
	);
}

export default PlaylistCardM;
