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

//import { MUSICLINKS } from './data/index';
import styles from './style/App.module.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackName, setTrackName] = useState('Yaşıyorum Sil Baştan');
  const [track, setTrack] = useState('https://server1.indiryuklemp3.org/mp3_files/yasiyorum-sil-bastan-h8OmycopAr-0.mp3');

  return (
        <Router>
        <div className={styles.layout}>
          <Sidebar />
          <Switch>
            <Route exact path="/">
                <Home isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
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
                  setTrackName={setTrackName}
                />
            </Route>
          </Switch>
          <Footer 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
            trackName={trackName}
            track={track}/* totalMusic={MUSICLINKS.length}*//>
        </div>
      </Router>
  );
}

export default App;