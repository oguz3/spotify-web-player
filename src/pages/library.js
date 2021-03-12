import Topnav from '../component/topnav/topnav';

import styles from "./library.module.css";

function Library(){
    return (
        <div className={styles.LibPage}>
            <Topnav tabButtons={true}/>
            Library Page
        </div>
    );
}

export default Library;