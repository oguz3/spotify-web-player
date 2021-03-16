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
                <Library />
            </Route>
            <Route exact path="/playlist/:path">
                <PlaylistPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;