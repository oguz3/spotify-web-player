import styles from './text-bold-l.module.css';

function TextBoldL({children}){
    return (
        <p className={styles.text}>
            {children}
        </p>
    );
}

export default TextBoldL;