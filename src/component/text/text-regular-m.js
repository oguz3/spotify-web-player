import styles from './text-regular-m.module.css'

function TextRegularM({children}){
    return (
        <p className={styles.text}>
            {children}
        </p>
    );
}

export default TextRegularM;