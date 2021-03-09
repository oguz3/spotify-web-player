import * as Icons from '../icons';

import styles from './topnav.module.css';

function Topnav() {
    return (
      <nav className={styles.Topnav}>
          <div>
                <span>
                    <button className={styles.PrevBtn}>
                        <Icons.Prevpage />
                    </button>
                    <button className={styles.NextBtn}>
                        <Icons.Nextpage />
                    </button>
                </span>
                <span>
                    <button className={styles.ProfileBtn}>
                        Oğuzhan Ulukaya
                    </button>
                </span>
          </div>
      </nav>
    );
}
  
export default Topnav;