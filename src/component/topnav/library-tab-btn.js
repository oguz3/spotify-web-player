import { NavLink } from "react-router-dom";
import TitleBoldM from '../text/text-bold-m';

import { LIBRARYTABS } from '../../constants/index';
import styles from './library-tab-btn.module.css';

function LibraryTabBtn() {
    return (
        <nav className={styles.TabNav}>
            {LIBRARYTABS.map((item) => {
                return (
                    <NavLink key={item.title} className={styles.tabBtn} to={item.path} exact activeClassName="activeTabBtn">
                        <TitleBoldM>{item.title}</TitleBoldM>
                    </NavLink>
                );
            })}
        </nav>
    );
}
  
export default LibraryTabBtn;