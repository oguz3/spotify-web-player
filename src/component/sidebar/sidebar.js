import NavButton from './nav-button'
import styles from './sidebar.module.css'

function Sidebar() {
    return (
      <div>
        <NavButton IconName="Home" active>Ana Sayfa</NavButton>
        <NavButton IconName="Search">Ara</NavButton>
        <NavButton IconName="Library">Kütüphane</NavButton>
      </div>
    );
}
  
export default Sidebar;