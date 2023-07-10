import styles from './WhoWeAre.module.css'
import { Title } from '../../../common/Title/Title'
import { Button } from '../../../common/Button/Button'
import { Founder } from './Founder/Founder'

export const WhoWeAre = () => {
    return (
        <div className={styles.container}>
        <div className={styles.whoWeAre}>
            <Title title='Who We Are' addStyles={styles.title} />
            <div className={styles.border}></div>

            <span className={styles.text}>PAM Consulting is built upon a team of motivated professionals aiming to provide families and businesses the services they need to relocate to the island of Cyprus. </span>
            <span className={styles.text}>We understand the challenges of deciding to relocate and this is why we prioritize our clients’ needs by making sure that the whole relocation process is as smooth and simple
            as possible.</span>

            <Button title='More about us' addStyles={styles.button}/>
            </div>
            <Founder/>


        </div>
    )
}