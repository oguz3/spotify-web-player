import Topnav from '../component/topnav/topnav';
import TitleL from '../component/text/title-l';
import TitleM from '../component/text/title-m'
import PlaylistCardS from '../component/cards/playlist-card-s';
import PlaylistCardM from '../component/cards/playlist-card-m';

import styles from "./home.module.css";

import { SECTIONONE, SECTIONTWO } from '../data/index'

function Home({isPlaying, setIsPlaying}){
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
                                    isPlaying={isPlaying} 
                                    setIsPlaying={setIsPlaying}
                                />
                            );
                        })}
                    </div>
                </section>

                <section>
                    <div className={styles.SectionTitle}>
                        <TitleM>Yakında çalınanlar</TitleM>
                    </div>
                    <div className={styles.SectionCardsMedium}>
                        {SECTIONTWO.map((item) => {
                            return (
                                <PlaylistCardM 
                                    path={item.link}
                                    imgUrl={item.imgUrl} 
                                    title={item.title} 
                                    artist={item.artist} 
                                    key={item.title}
                                    isPlaying={isPlaying} 
                                    setIsPlaying={setIsPlaying}
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