import { Title } from '../../../common/Title/Title'
import styles from './Contact.module.css'
import phone from '../../../assets/images/phone.svg'
import email from '../../../assets/images/email.svg'
import { Request } from './Request/Request'

export const Contact = ()=>{
    return(
        <div className={styles.container}>
        <div className={styles.contact}>
            <Title title='Contact Us' addStyles={styles.header}/>
            {/* <div className={styles.bordertext}></div> */}

            <img className={styles.img} src={phone} alt='phone'/>
            <span className={styles.text}>+357 9056759</span>

            <img className={styles.img} src={email} alt='email'/>
            <span className={styles.text}>contact@pamrelocation.com</span>
            <Request/>



        </div>

        </div>

    )
}