import styles from './title-l.module.css'

function TitleL({children}){
    return (
        <h1 className={styles.text}>
            {children}
        </h1>
    );
}

export default TitleL;