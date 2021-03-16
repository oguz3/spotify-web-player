import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TitleM from '../component/text/title-m';
import Topnav from '../component/topnav/topnav';
import PlaylistCardM from '../component/cards/playlist-card-m'
import { PLAYLIST } from "../data/index";

import styles from "./library.module.css";

function Library(){
    return (
        <div className={styles.LibPage}>
                <Topnav tabButtons={true}/>
                <div className={styles.Library}>
                        <Route exact path="/library"><PlaylistTab /></Route>
                        <Route path="/library/podcasts"><PodcastTab /></Route>
                        <Route path="/library/artists"><ArtistTab /></Route>
                        <Route path="/library/albums"><AlbumTab /></Route>
                </div>
        </div>
    );
}

function PlaylistTab(){
    return (
        <div>
            <TitleM>Çalma Listeleri</TitleM>
            <div className={styles.Grid}>
                {PLAYLIST.filter(item => item.type == 'playlist').map((item) => {
                    return (
                        <PlaylistCardM 
                            key={item.title}
                            data={item}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function PodcastTab(){
    return (
        <div>
            <TitleM>Podcast'ler</TitleM>
            <div className={styles.Grid}>
                {PLAYLIST.filter(item => item.type == 'podcast').map((item) => {
                    return (
                        <PlaylistCardM 
                            key={item.title}
                            data={item}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function ArtistTab(){
    return (
        <div>
            <TitleM>Sanatçılar</TitleM>
        </div>
    );
}

function AlbumTab(){
    return (
        <div>
            <TitleM>Albümler</TitleM>
            <div className={styles.Grid}>
                {PLAYLIST.filter(item => item.type == 'albüm').map((item) => {
                    return (
                        <PlaylistCardM 
                            key={item.title}
                            data={item}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Library;