import styles from './title-s.module.css'

function TitleS({children}){
    return (
        <h3 className={styles.text}>
            {children}
        </h3>
    );
}

export default TitleS;