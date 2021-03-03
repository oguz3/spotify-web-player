import styles from './playlist.module.css';
import TitleS from '../text/title-s';
import TextRegularM from '../text/text-regular-m';
import PlaylistButton from './playlist-button';

function Playlist() {
    return (
      <div className={styles.Playlist}>
        <TitleS>Çalma Listeleri</TitleS>

        <PlaylistButton href="any" ImgName="createPlaylist">Çalma Listesi Oluştur</PlaylistButton>
        <PlaylistButton href="any" ImgName="popularSong">Beğenilen Şarkılar</PlaylistButton>

        <hr className={styles.hr}/>
        <TextRegularM>Heavy Queens</TextRegularM>
        <TextRegularM>Daily Mix 1</TextRegularM>
        <TextRegularM>Purple Turtle</TextRegularM>
        <TextRegularM>Volbeat Complate</TextRegularM>
        <TextRegularM>Vietnam War Era Music</TextRegularM>
        <TextRegularM>Türkçe Rock</TextRegularM>
        <TextRegularM>5FDP</TextRegularM>
      </div>
    );
}
  
export default Playlist;