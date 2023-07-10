import styles from './Paradise.module.css'

import paradiseImageLeft from '../../../assets/images/paradiseImageLeft.png'
import paradiseImageRight from '../../../assets/images/paradiseImageRight.png'
import { Button } from '../../../common/Button/Button'

export const Paradise = () => {
    return (
        <div className={styles.container}>
        <div className={styles.containerImg}>
            {/* <img className={styles.image} src={paradiseImageLeft} alt='paradiseImageLeft' /> */}
            {/* <div className={styles.opacity}></div> */}
            </div>
            <div className={styles.paradise}>
                <h2 className={styles.header}>Moving to Paradise</h2>
                <span className={styles.text}>Have you ever dreamed about the perfect place to live? Your definition of perfect may be different someone else’s. Are you longing to live by the beach and listen to the soothing waves or are you a kind of person who enjoys the bustling sounds of the city? Whatever lifestyle you desire, Cyprus has it all! Whether you’re travelling with your family, your partner, or as a solo business entrepreneur, this exotic island can offer you a little bit of everything.
                </span>

                <span className={styles.text}>If you’ve made the decision to relocate to Cyprus, then you are expecting to find a safe place to settle. With extremely low crime rate, stunning sandy beaches, and awe-inspiring mountain views, Cyprus is the place to be!</span>
                <Button title= 'Find Out More'  addStyles={styles.button}/>
            </div>
            <div className={styles.containerImg2}>
            {/* <div className={styles.opacity2}></div> */}
            {/* <img className={styles.image} src={paradiseImageRight} alt='paradiseImageRight' /> */}
            </div>
        </div>
    )
}