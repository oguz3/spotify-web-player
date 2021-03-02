import './style/App.css';

import Home from './pages/home'
import Search from './pages/search'
import Library from './pages/library'
import NavButton from './component/sidebar/nav-button'

function App() {
  return (
    <div>
      <Home />
      <Search />
      <Library>Library Page</Library>
      <NavButton IconName="Home">Ana Sayfa</NavButton>
    </div>
  );
}

export default App;
