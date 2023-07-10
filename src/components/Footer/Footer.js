import styles from "./Footer.module.css"

export const Footer = ()=>{
    return(
        <div className={styles.container}>
            <span className={styles.item}>© 2022 PAM Consulting. All rights reserved</span>
            <div className={styles.line}></div>
            <span className={styles.item}>Disclaimer</span>
            <div className={styles.line}></div>
            <span className={styles.item}>Privacy poilcy</span>
            <span className={[styles.item, styles.question].join(' ')}>Who designed this website?</span>
        </div>
    )
}