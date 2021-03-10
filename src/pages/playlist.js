import Topnav from '../component/topnav/topnav';
import { PLAYLIST } from "../data/index";

import styles from './playlist.module.css';

function PlaylistPage({ match }) {
	const {
		params: { path },
	} = match;

	function changeBg(color){
		document.documentElement.style.setProperty('--hover-home-bg', color);
	}

	return (
		<div className={styles.PlaylistPage}>
			<div className={styles.gradientBg}></div>
            <div className={styles.gradientBgSoft}></div>
			<div className={styles.Bg}></div>

			<Topnav />

			{PLAYLIST.map((item) => {
                if(item.link == path){
                    return (
                        <div onLoad={changeBg(item.playlistBg)}>
                            <p>Playlist Adı: {item.title}</p>
                            <img src={item.imgUrl} />
							{item.playlistData.map((song) => {
									return (
										<div>
											<p>{song.index} - {song.songName}</p>
										</div>
									);
							})}
                        </div>
                    );
                }
			})}
		</div>
	);
}

export default PlaylistPage;
