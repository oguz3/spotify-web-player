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

import { MUSICLINKS } from './data/index';
import styles from './style/App.module.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
        <Router>
        <div className={styles.layout}>
          <Sidebar />
          <Switch>
            <Route exact path="/">
                <Home  isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/library">
                <Library />
            </Route>
            <Route exact path="/playlist/:path" component={PlaylistPage} />
          </Switch>
          <Footer isPlaying={isPlaying} setIsPlaying={setIsPlaying} track={MUSICLINKS} totalMusic={MUSICLINKS.length}/>
        </div>
      </Router>
  );
}

export default App;