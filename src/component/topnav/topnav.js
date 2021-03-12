import PrevPageBtn from '../buttons/prev-page-button';
import NextPageBtn from '../buttons/next-page-button';
import SearchBox from './search-box';
import LibraryTabBtn from './library-tab-btn';

import styles from './topnav.module.css';

function Topnav({search = false, tabButtons = false}) {
    return (
      <nav className={styles.Topnav}>
          <div>
                <span>
                    <PrevPageBtn />
                    <NextPageBtn />
                    { search ? <SearchBox /> : '' }
                    { tabButtons ? <LibraryTabBtn /> : '' }
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