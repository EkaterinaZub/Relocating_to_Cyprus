
import styles from './PopUp.module.css'

export const PopUp = ({ setIsShowPopUp }) => {
    return (
        <div className={styles.container} onClick={() => setIsShowPopUp(false)}>
            <div className={styles.block}>
                <span className={styles.title}>Thank You!</span>
                <span className={styles.title}>Your request is being reviewed</span>

                <span className={styles.text}>One of our team members will get in touch with you soon</span>

            </div>
        </div>
    )
}