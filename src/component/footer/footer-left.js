import * as Icons from '../icons';
import TextRegularM from '../text/text-regular-m';

import styles from "./footer-left.module.css";

function FooterLeft(){
    return (
        <div className={styles.footerLeft}>
            <ImgBox />
            <SongDetails />
            <Like />
            <PipToogle />
        </div>
    );
}

function ImgBox(){
    return (
        <div className={styles.imgBox}>
            <img src={'https://i.scdn.co/image/ab67616d000048511d26b3e7ea803059a6e4ffea'} />
        </div>
    );
}

function SongDetails(){
    return (
        <div className={styles.songDetails}>
            <TextRegularM>Yaşıyorum Sil Baştan</TextRegularM>
            <TextRegularM><small>Ari Barakos</small></TextRegularM>
        </div>
    );
}

function Like(){
    return (
        <div className={styles.likeBox}>
            <Icons.Like />
        </div>
    );
}

function PipToogle(){
    return (
        <div className={styles.pipBox}>
            <Icons.Corner />
        </div>
    );
}

export default FooterLeft;