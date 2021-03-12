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

function PlaylistPage({ isPlaying, setIsPlaying, setTrackData }) {
	const { path } = useParams();

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
                        <div key={item.title} onLoad={changeBg(item.playlistBg)}>

							<PlaylistDetails 
								item={{
									type: item.type,
									title: item.title,
									artist: item.artist,
									imgUrl: item.imgUrl,
								}}
							/>

							<div className={styles.PlaylistIcons}>
								<PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
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
													trackKey: [PLAYLIST.indexOf(item), item.playlistData.indexOf(song)],
													track: song.link,
													trackName: song.songName,
													trackImg: song.songimg,
													trackArtist: song.songArtist,
												})
											}} 
											className={styles.SongBtn}
										>
											<PlaylistTrack 
												isPlaying={isPlaying} 
												setIsPlaying={setIsPlaying}
												song={{
													listType: item.type,
													index: song.index, 
													songimg: song.songimg,
													songName: song.songName,
													songArtist: song.songArtist,
													songUrl: song.link,
													trackTime: song.trackTime,
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
