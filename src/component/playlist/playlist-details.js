import TitleS from '../text/title-s';
import TextBoldM from '../text/text-bold-m';

import styles from "./playlist-details.module.css";

function PlaylistDetails({item}) {
	return (
        <div className={styles.playlistDetails}>
            <div className={styles.imgBox}>
                <img src={item.imgUrl} />
            </div>
            <div className={styles.textBox}>
                <TitleS>{item.type}</TitleS>
                <h1>{item.title}</h1>
                <div className={styles.Artist}>
                    <figure>
                        <img src={item.imgUrl} />
                    </figure>
                    <TextBoldM>{item.artist}</TextBoldM>
                </div>
            </div>
        </div>
	);
}

export default PlaylistDetails;
