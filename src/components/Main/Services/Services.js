// import { Link } from 'react-router-dom'
import { Button } from '../../../common/Button/Button'
import { Title } from '../../../common/Title/Title'
import {services}  from '../../data/services'
import styles from './Services.module.css'
import { Link } from 'react-router-dom'

export const Services = ()=>{
    return(
        <div className={styles.container}>
        <Title title='Our Services'  addStyles={styles.header}/>
        <div className={styles.services}>
        {
            services.map(servic=>
                <div className={styles.card} key={servic.id}>
              <img className={styles.img} src={servic.images.src} alt={servic.images.alt}/>
              <h3 className={styles.title}>{servic.header}</h3>
              <span className={styles.text}>{servic.text}</span>
              <Link to = {`/${servic.url}`}><Button title= 'Find Out More' addStyles={styles.button}/></Link>

                </div>
            )
        }
        </div>

        </div>

    )
}