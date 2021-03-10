import * as Icons from '../icons';
import TextRegularM from '../text/text-regular-m';
import IconButton from '../buttons/icon-button';

import styles from "./footer-left.module.css";

function FooterLeft({trackName, trackImg, trackArtist}){
    return (
        <div className={styles.footerLeft}>
            <ImgBox 
                trackImg={trackImg}
            />
            <SongDetails 
                trackName={trackName}
                trackArtist={trackArtist}
            />
            <IconButton icon={<Icons.Like />} activeicon={<Icons.LikeActive />}/>
            <IconButton icon={<Icons.Corner />} activeicon={<Icons.Corner />}/>
        </div>
    );
}

function ImgBox({trackImg}){
    return (
        <div className={styles.imgBox}>
            <img src={trackImg} alt="Gavurlar"/>
        </div>
    );
}

function SongDetails({trackName, trackArtist}){
    return (
        <div className={styles.songDetails}>
            <TextRegularM>{trackName}</TextRegularM>
            <TextRegularM><small>{trackArtist}</small></TextRegularM>
        </div>
    );
}

export default FooterLeft;