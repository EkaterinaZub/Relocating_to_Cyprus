import { Button } from '../../../../common/Button/Button'
import styles from './Founder.module.css'
import founder from '../../../../assets/images/founder.png'


export const Founder = ()=>{
    return(
        <div className={styles.container}>
        <img  className={styles.img} src={founder} alt='founder' />
        <div className={styles.founder}>
            <h3 className={styles.title}>FOUNDER</h3>
            <span className={styles.name}>Anastasia Papaharidemou</span>
            <Button title='Contact' addStyles={styles.button}/>
        </div>

        </div>
    )
}