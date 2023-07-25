import styles from './Map.module.css'
import { Title } from '../../../common/Title/Title'
import { Location } from './Location/Location'
import { CardLocation } from './CardLocation/CardLocation'
import { useState } from 'react'
import { cyprus } from '../../data/cyprus'


export const Map = () => {

    const [location, setLocation] = useState([])



    const handleclick = (e) => {
        const newLocation = cyprus.filter((el) => el.name === e.currentTarget.id);
        setLocation(newLocation)
    }



    return (

        <div className={styles.container}>

            <div className={styles.map}>
                <Title addStyles={styles.title} title='FIND THE IDEAL LOCATION TO CALL HOME' />
                <span className={styles.text}>Click your mouse over any city to learn more about it</span>
                <Location handleclick={handleclick} />

            </div>
            <CardLocation location={location} />
        </div>

    )
}

