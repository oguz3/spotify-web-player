import React, { useState, useEffect  } from 'react';
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
  const [trackData, setTrackData] = useState({
    trackKey: [0, 0],
    track: `${PLAYLIST[0].playlistData[0].link}`,
    trackName: `${PLAYLIST[0].playlistData[0].songName}`,
    trackImg: `${PLAYLIST[0].playlistData[0].songimg}`,
    trackArtist: `${PLAYLIST[0].playlistData[0].songArtist}`,
  })

  useEffect(() => {
    setTrackData({
      trackKey: trackData.trackKey,
      track: `${PLAYLIST[trackData.trackKey[0]].playlistData[trackData.trackKey[1]].link}`,
      trackName: `${PLAYLIST[trackData.trackKey[0]].playlistData[trackData.trackKey[1]].songName}`,
      trackImg: `${PLAYLIST[trackData.trackKey[0]].playlistData[trackData.trackKey[1]].songimg}`,
      trackArtist: `${PLAYLIST[trackData.trackKey[0]].playlistData[trackData.trackKey[1]].songArtist}`,
    });
  }, [trackData.trackKey]);

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
                  setTrackData={setTrackData}
                />
            </Route>
          </Switch>
          <Footer 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
            trackData={trackData}
            setTrackData={setTrackData}
          />
        </div>
      </Router>
  );
}

export default App;