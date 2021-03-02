import {Home, HomeActive, Search, SearchActive, Library, LibraryActive} from '../icons';
import TextBoldM from '../text/text-bold-m';
import styles from './nav-button.module.css';

function NavButton({IconName, children, active}){

    const components = {
        Home: Home,
        HomeActive: HomeActive,
        Search: Search,
        SearchActive: SearchActive,
        Library: Library,
        LibraryActive: LibraryActive
    };
    function Icons() {
        let iconame
        if(active === true){iconame = `${IconName}Active`}
        else {iconame = IconName}
        const Icon = components[iconame];
        return <Icon/>;
    }

    return (
        <button className={styles.button}>
            <Icons/>
            <TextBoldM>{children}</TextBoldM>
        </button>
    );
}

export default NavButton;