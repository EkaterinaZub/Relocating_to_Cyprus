import styles from "./ErrorValidate.module.css";

export const ErrorValidate = ({ error, name }) => {
    return <span className={styles.text}>{error[name]}</span>
}
