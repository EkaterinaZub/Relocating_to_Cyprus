import styles from './Button.module.css'

export const Button = ({ disabled, type, id, onClick, title, addStyles }) => {

    return (
        <button className={[styles.button, addStyles].join(' ')}
            disabled={disabled}
            type={type}
            id={id}
            onClick={onClick}

        >
            <span className={styles.text}>{title}</span>
        </button>
    )
}