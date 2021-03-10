import * as Icons from '../icons';
import TextRegularM from '../text/text-regular-m';
import IconButton from '../buttons/icon-button';

import styles from "./footer-left.module.css";

function FooterLeft({trackName}){
    return (
        <div className={styles.footerLeft}>
            <ImgBox />
            <SongDetails trackName={trackName}/>
            <IconButton icon={<Icons.Like />} activeicon={<Icons.LikeActive />}/>
            <IconButton icon={<Icons.Corner />} activeicon={<Icons.Corner />}/>
        </div>
    );
}

function ImgBox(){
    return (
        <div className={styles.imgBox}>
            <img src={'https://i.scdn.co/image/ab67616d000048511d26b3e7ea803059a6e4ffea'} alt="Gavurlar"/>
        </div>
    );
}

function SongDetails({trackName}){
    return (
        <div className={styles.songDetails}>
            <TextRegularM>{trackName}</TextRegularM>
            <TextRegularM><small>Ari Barakos</small></TextRegularM>
        </div>
    );
}

export default FooterLeft;