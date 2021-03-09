import Topnav from '../component/topnav/topnav';

import styles from "./library.module.css";

function Library({children}){
    return (
        <div className={styles.LibPage}>
            <Topnav />
            {children}
        </div>
    );
}

export default Library;