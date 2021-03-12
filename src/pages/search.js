import Topnav from '../component/topnav/topnav';
import TitleM from '../component/text/title-m'
import SearchPageCard from '../component/cards/searchpage-card';
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
                            <SearchPageCard 
                                key={card.title}
                                cardData={{
                                    bgcolor: card.bgcolor,
                                    title: card.title,
                                    imgurl: card.imgurl,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Search;