import { NavLink } from "react-router-dom";
import TextBoldM from '../text/text-bold-m';
import styles from './playlist-button.module.css';

function PlaylistButton({ImgName, children, href}){
    return (
        <NavLink to={href} exact activeClassName="activeLink">
            <button className={styles.button}>
                <img src={`./image/${ImgName}.PNG`} alt={ImgName} />
                <TextBoldM>{children}</TextBoldM>
            </button>
        </NavLink>
    );
}

export default PlaylistButton;