import {Logo} from '../icons';
import NavButton from './nav-button'
import Playlist from './playlist'
import styles from './sidebar.module.css'

function Sidebar() {
    return (
      <nav className={styles.SideNavbar}>
        <div>
            <Logo/>
        </div>
        <div className={styles.navBtns}>
          <NavButton href="/" IconName="Home" active>Ana Sayfa</NavButton>
          <NavButton href="/search" IconName="Search">Ara</NavButton>
          <NavButton href="/library" IconName="Library">Kütüphane</NavButton>
        </div>
        <div>
          <Playlist />
        </div>
      </nav>
    );
}
  
export default Sidebar;