import Topnav from '../component/topnav/topnav';
import TitleM from '../component/text/title-m'

import styles from "./search.module.css";

function Search(){
    return (
        <div className={styles.SearchPage}>
            <Topnav />
            
            <div className={styles.Search}>
                <TitleM>Hepsine göz at</TitleM>
            </div>
        </div>
    );
}

export default Search;