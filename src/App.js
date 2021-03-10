import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Sidebar from './component/sidebar/sidebar';
import Footer from './component/footer/footer';
import Home from './pages/home';
import Search from './pages/search';
import Library from './pages/library';
import PlaylistPage from './pages/playlist';

import { PLAYLIST } from './data/index';
import styles from './style/App.module.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState(PLAYLIST[0].playlistData[0].link);
  const [trackKey, setTrackKey] = useState('0-0');
  const [trackName, setTrackName] = useState(PLAYLIST[0].playlistData[0].songName);
  const [trackImg, setTrackImg] = useState(PLAYLIST[0].playlistData[0].songimg);
  const [trackArtist, setTrackArtist] = useState(PLAYLIST[0].playlistData[0].songArtist);

  return (
        <Router>
        <div className={styles.layout}>
          <Sidebar />
          <Switch>
            <Route exact path="/">
                <Home 
                  isPlaying={isPlaying} 
                  setIsPlaying={setIsPlaying}
                />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/library">
                <Library />
            </Route>
            <Route exact path="/playlist/:path">
                <PlaylistPage 
                  isPlaying={isPlaying} 
                  setIsPlaying={setIsPlaying} 
                  setTrack={setTrack}
                  setTrackKey={setTrackKey}
                  setTrackName={setTrackName}
                  setTrackImg={setTrackImg}
                  setTrackArtist={setTrackArtist}
                />
            </Route>
          </Switch>
          <Footer 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
            trackName={trackName}
            trackImg={trackImg}
            trackArtist={trackArtist}
            trackKey={trackKey}
            track={track}
            setTrack={setTrack}
            setTrackKey={setTrackKey}
            setTrackName={setTrackName}
            setTrackImg={setTrackImg}
            setTrackArtist={setTrackArtist}
          />
        </div>
      </Router>
  );
}

export default App;