import styles from './text-bold-m.module.css'

function TextBoldM({children}){
    return (
        <p className={styles.text}>
            {children}
        </p>
    );
}

export default TextBoldM;