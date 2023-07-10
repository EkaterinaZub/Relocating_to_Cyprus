import styles from './Map.module.css'
import map from '../../../assets/images/map.png'
import { Title } from '../../../common/Title/Title'
import { Location } from './Location/Location'
import { CardLocation } from './CardLocation/CardLocation'


export const Map = () => {
    return (

        <div className={styles.container}>
            <div className={styles.map}>
                <Title addStyles={styles.title} title='FIND THE IDEAL LOCATION TO CALL HOME' />
                <span className={styles.text}>Click your mouse over any city to learn more about it</span>
                <Location />
                
            </div>
            <CardLocation/>
        </div>

    )
}