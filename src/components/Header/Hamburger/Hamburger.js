import styles from './Hamburger.module.css'

export const Hamburger = ({showHamburger, setShowHamburger}) => {
    return (
        <div className={styles.container} onClick={() => setShowHamburger(!showHamburger)}>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>


        </div>
    )

}