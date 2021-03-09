import Topnav from '../component/topnav/topnav';
import TitleL from '../component/text/title-l';
import PlaylistCardS from '../component/cards/playlist-card-s';

import styles from "./home.module.css";

import { SECTIONONE } from '../data/index'

function Home(){
    return (
        <div className={styles.Home}>
            <div className={styles.HoverBg}></div>
            <div className={styles.Bg}></div>

            <Topnav />

            <div className={styles.Content}>
                <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>İyi günler</TitleL>
                    </div>
                    <div className={styles.SectionCards}>
                        {SECTIONONE.map((item) => {
                            return (
                                <PlaylistCardS 
                                    path={item.link}
                                    imgUrl={item.imgUrl} 
                                    title={item.title} 
                                    hoverColor={item.hoverColor} 
                                    key={item.title}
                                />
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;