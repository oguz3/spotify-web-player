import Navigation from './navigation'

import styles from './mobile-navigation.module.css'

function MobileNavigation() {
    return (
      <nav className={styles.MobileNav}>
        <Navigation />
      </nav>
    );
}
  
export default MobileNavigation;