import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import useWindowSize from './hooks/useWindowSize';
import Sidebar from './component/sidebar/sidebar';
import MobileNavigation from './component/sidebar/mobile-navigation';
import Footer from './component/footer/footer';
import Home from './pages/home';
import Search from './pages/search';
import Library from './pages/library';
import PlaylistPage from './pages/playlist';

import CONST from './constants/index';
import { PLAYLIST } from './data/index';
import styles from './style/App.module.css';

function App() {
  const size = useWindowSize();

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
          {size.width > CONST.MOBILE_SIZE 
            ? <Sidebar /> 
            : <MobileNavigation />
          }
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/library">
                <Library 
                  isPlaying={isPlaying} 
                  setIsPlaying={setIsPlaying} 
                  trackData={trackData}
                />
            </Route>
            <Route exact path="/playlist/:path">
                <PlaylistPage 
                  isPlaying={isPlaying} 
                  setIsPlaying={setIsPlaying} 
                  trackData={trackData}
                  setTrackData={setTrackData}
                />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;