import * as Icons from '../icons';
import styles from './search-box.module.css';

function SearchBox() {
    return (
        <div className={styles.SeachBox}>
            <Icons.Search />
            <input placeholder="Sanatçılar, şarkılar veya podcast'ler" maxLength="80"/>
        </div>
    );
}
  
export default SearchBox;