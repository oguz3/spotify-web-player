import styles from './title-m.module.css'

function TitleM({children}){
    return (
        <h2 className={styles.text}>
            {children}
        </h2>
    );
}

export default TitleM;