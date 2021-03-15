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
		<div className={styles.PlaylistCardSBox}>
			<Link to={`/playlist/${data.link}`}>
				<div className={styles.PlaylistCardS}>
					<div className={styles.ImgBox}>
						<img src={data.imgUrl} alt={data.title} />
					</div>
					<div className={styles.Title}>
						<TextBoldL>{data.title}</TextBoldL>
						<TextRegularM>{data.artist}</TextRegularM>
					</div>
				</div>
			</Link>
			<div className={`${styles.IconBox} ${isthisplay&&isPlaying ? styles.ActiveIconBox : ''}`}>
				<PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} isthisplay={isthisplay}/>
			</div>
		</div>
	);
}

export default PlaylistCardM;
