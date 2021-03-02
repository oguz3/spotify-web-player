import styles from "./home.module.css"
import * as Icons from "../component/icons"

function Home(){
    return (
        <div className={styles.IconBox}>
            <Icons.Corner/>
            <Icons.Down/>
            <Icons.DownloadApp/>
            <Icons.Home/>
            <Icons.HomeActive/>
            <Icons.Library/>
            <Icons.LibraryActive/>
            <Icons.Like/>
            <Icons.LikeActive/>
            <Icons.Logo/>
            <Icons.Loop/>
            <Icons.Mix/>
            <Icons.Next/>
            <Icons.Nextpage/>
            <Icons.Play/>
            <Icons.Prev/>
            <Icons.Prevpage/>
            <Icons.Profile/>
            <Icons.Search/>
            <Icons.SearchActive/>
            <Icons.Sound/>
        </div>
    );
}

export default Home;