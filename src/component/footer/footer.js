import FooterLeft from './footer-left';
import FooterMid from './footer-mid';
import FooterRight from './footer-right';

import styles from "./footer.module.css";

function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.nowplayingbar}>
                <FooterLeft />
                <FooterMid />
                <FooterRight />
            </div>
        </footer>
    );
}

export default Footer;