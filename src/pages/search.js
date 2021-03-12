import Topnav from '../component/topnav/topnav';
import TitleM from '../component/text/title-m'
import { SEARCHCARDS } from '../data/index';

import styles from "./search.module.css";

function Search(){
    return (
        <div className={styles.SearchPage}>
            <Topnav search={true}/>

            <div className={styles.Search}>
                <TitleM>Hepsine göz at</TitleM>
                <div className={styles.SearchCardGrid}>
                    {SEARCHCARDS.map((card) => {
                        return (
                            <div key={card.title} className={styles.SearchCardBox} style={{backgroundColor: `${card.bgcolor}`}}>
                                <div className={styles.SearchCard}>
                                    <img src={card.imgurl} />
                                    <TitleM>{card.title}</TitleM>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Search;