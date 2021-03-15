import { useParams } from 'react-router';
import Topnav from '../component/topnav/topnav';
import TextRegularM from "../component/text/text-regular-m";
import PlayButton from '../component/buttons/play-button';
import IconButton from '../component/buttons/icon-button';
import PlaylistDetails from '../component/playlist/playlist-details';
import PlaylistTrack from '../component/playlist/playlist-track';
import * as Icons from '../component/icons';
import { PLAYLIST } from "../data/index";

import styles from './playlist.module.css';
import { useEffect, useState } from 'react';

function PlaylistPage({ isPlaying, setIsPlaying, trackData, setTrackData }) {
	const[playlistIndex, setPlaylistIndex] = useState(undefined);
	const[isthisplay, setIsthisPlay] = useState(false);
	const { path } = useParams();

	function changeBg(color){
		document.documentElement.style.setProperty('--hover-home-bg', color);
	}

	useEffect(() => {
		setIsthisPlay(playlistIndex === trackData.trackKey[0])
	})

	return (
		<div className={styles.PlaylistPage}>
			<div className={styles.gradientBg}></div>
            <div className={styles.gradientBgSoft}></div>
			<div className={styles.Bg}></div>

			<Topnav />

			{PLAYLIST.map((item) => {
                if(item.link == path){
                    return (
                        <div key={item.title} onLoad={() => {
							changeBg(item.playlistBg);
							setPlaylistIndex(PLAYLIST.indexOf(item))
						}}>

							<PlaylistDetails 
								data={item}
							/>

							<div className={styles.PlaylistIcons}>
								<button
									onClick={() => {
										setTrackData({
											...trackData,
											trackKey: [PLAYLIST.indexOf(item), 0]
										});
									}} 
								>
									<PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} isthisplay={isthisplay}/>
								</button>
								<IconButton icon={<Icons.Like />} activeicon={<Icons.LikeActive />}/>
								<Icons.More className={styles.moreIcon}/>
							</div>

							<div className={styles.ListHead}>
								<TextRegularM>#</TextRegularM>
								<TextRegularM>BAŞLIK</TextRegularM>
								<Icons.Time/>
							</div>

							<div className={styles.PlaylistSongs}>
								{item.playlistData.map((song) => {
									return (
										<button 
											key={song.index} 
											onClick={() => {
												setTrackData({
													...trackData,
													trackKey: [PLAYLIST.indexOf(item), item.playlistData.indexOf(song)],
												})
											}} 
											className={styles.SongBtn}
										>
											<PlaylistTrack 
												isPlaying={isPlaying} 
												setIsPlaying={setIsPlaying}
												data={{
													listType: item.type,
													song: song
												}}
											/>
										</button>
									);
								})}
							</div>
                        </div>
                    );
                }
			})}
		</div>
	);
}

export default PlaylistPage;
