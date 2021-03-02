import NavButton from './nav-button'
import styles from './sidebar.module.css'

function Sidebar() {
    return (
      <div>
          <NavButton href="/" IconName="Home" active>Ana Sayfa</NavButton>
          <NavButton href="/search" IconName="Search">Ara</NavButton>
          <NavButton href="/library" IconName="Library">Kütüphane</NavButton>
      </div>
    );
}
  
export default Sidebar;