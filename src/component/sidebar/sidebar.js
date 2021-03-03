import {Logo} from '../icons';
import Playlist from './playlist';
import Navigation from './navigation'

import styles from './sidebar.module.css';

function Sidebar() {
    return (
      <nav className={styles.SideNavbar}>
        <div>
            <Logo/>
        </div>
        <div>
            <Navigation />
        </div>
        <div>
            <Playlist />
        </div>
        <div>
 
        </div>
      </nav>
    );
}
  
export default Sidebar;