import Topnav from '../component/topnav/topnav';

import styles from "./home.module.css";

function Home(){
    return (
        <div className={styles.Home}>
            <div className={styles.HoverBg}></div>
            <div className={styles.Bg}></div>
            <Topnav />
        </div>
    );
}

export default Home;