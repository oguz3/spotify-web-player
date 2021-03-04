import { NavLink } from "react-router-dom";

import styles from './playlist.module.css';

import TitleS from '../text/title-s';
import TextRegularM from '../text/text-regular-m';
import PlaylistButton from './playlist-button';
import { PLAYLIST, PLAYLISTLINKS } from '../../constants';

function Playlist() {
    return (
      <div className={styles.Playlist}>
        <TitleS>Çalma Listeleri</TitleS>

        <div>
          {PLAYLIST.map((playlist) => {
            return (
                <PlaylistButton 
                  href={playlist.path} 
                  ImgName={playlist.ImgName}
                  key={playlist.title}
                >
                  {playlist.title}
                </PlaylistButton>
                );
          })}
        </div>

        <hr className={styles.hr}/>

        <div>
          {PLAYLISTLINKS.map((list) => {
            return (
              <NavLink to={list.path} key={list.title} exact activeClassName="a">
                  <TextRegularM>{list.title}</TextRegularM>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
}
  
export default Playlist;