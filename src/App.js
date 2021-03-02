import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './style/App.css';

import Home from './pages/home';
import Search from './pages/search';
import Library from './pages/library';
import Sidebar from './component/sidebar/sidebar';

function App() {
  return (
        <Router>
        <div>
          <Sidebar/>
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
        </div>
      </Router>
  );
}

export default App;