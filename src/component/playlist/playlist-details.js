import TitleS from '../text/title-s';
import TextBoldM from '../text/text-bold-m';

import styles from "./playlist-details.module.css";

function PlaylistDetails({data}) {
	return (
        <div className={styles.playlistDetails}>
            <div className={styles.imgBox}>
                <img src={data.imgUrl} />
            </div>
            <div className={styles.textBox}>
                <TitleS>{data.type}</TitleS>
                <h1>{data.title}</h1>
                <div className={styles.Artist}>
                    <figure>
                        <img src={data.imgUrl} />
                    </figure>
                    <TextBoldM>{data.artist}</TextBoldM>
                </div>
            </div>
        </div>
	);
}

export default PlaylistDetails;
