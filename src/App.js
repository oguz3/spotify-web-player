import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styles from './style/App.module.css';

import Sidebar from './component/sidebar/sidebar';
import Footer from './component/footer/footer';
import Home from './pages/home';
import Search from './pages/search';
import Library from './pages/library';

function App() {
  return (
        <Router>
        <div className={styles.layout}>
          <Sidebar />
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/library">
                <Library>Library Page</Library>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;