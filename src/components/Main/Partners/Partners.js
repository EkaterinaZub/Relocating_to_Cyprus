import { Title } from '../../../common/Title/Title'
import styles from './Partners.module.css'
import partner1 from '../../../assets/images/partner1.svg'
import partner2 from '../../../assets/images/partner2.svg'
import partner3 from '../../../assets/images/partner3.svg'
import partner4 from '../../../assets/images/partner4.svg'
import partner5 from '../../../assets/images/partner5.svg'

export const Partners =()=>{
    return(
    <div className={styles.container}>
        <Title title='Our Partners' addStyles={styles.title}/>

        <div className={styles.images}>
            <img src={partner1} alt='partner1'/>
            <img src={partner2} alt='partner2'/>
            <img src={partner3} alt='partner3'/>
            <img src={partner4} alt='partner4'/>
            <img src={partner5} alt='partner5'/>
            <img src={partner2} alt='partner2'/>
        </div>
        </div>

    )
}