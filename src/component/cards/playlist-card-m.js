import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextBoldL from "../text/text-bold-l";
import TextRegularM from '../text/text-regular-m';
import PlayButton from '../buttons/play-button';

import styles from "./playlist-card-m.module.css";

function PlaylistCardM({ data, trackData, isPlaying, setIsPlaying}) {
	const[isthisplay, setIsthisPlay] = useState(false)

	useEffect(() => {
		setIsthisPlay(parseInt(data.index) === trackData.trackKey[0])
	})

	return (
		<Link to={`/playlist/${data.link}`}>
			<div className={styles.PlaylistCardS}>
				<div className={styles.ImgBox}>
					<img src={data.imgUrl} alt={data.title} />
					<div className={styles.IconBox}>
						<PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} isthisplay={isthisplay}/>
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
