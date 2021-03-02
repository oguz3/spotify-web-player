import './style/App.css';

import Home from './pages/home';
import Search from './pages/search';
import Library from './pages/library';
import Sidebar from './component/sidebar/sidebar';

function App() {
  return (
    <div>
      <Home />
      <Search />
      <Library>Library Page</Library>
      <Sidebar/>
    </div>
  );
}

export default App;