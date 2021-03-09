import PrevPageBtn from '../buttons/prev-page-button';
import NextPageBtn from '../buttons/next-page-button';

import styles from './topnav.module.css';

function Topnav() {
    return (
      <nav className={styles.Topnav}>
          <div>
                <span>
                    <PrevPageBtn />
                    <NextPageBtn />
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