import {cyprus} from '../../../data/cyprus'
import styles from './CardLocation.module.css'

export const CardLocation = ({state, show})=>{
    console.log(show)
    if (state)
    return(
        <>
            {
                show.map(card=>
                <div className={styles.container} key={card.id}>
                
                    <div className={styles.image}>
                        <img className={styles.img} src={card.images.src} alt={card.images.alt}/>
                        <img className={styles.img} src={card.images2.src} alt={card.images2.alt}/>
                        <img className={styles.img} src={card.images3.src} alt={card.images3.alt}/>
                    </div>
                    <h2 className={styles.title}>{card.title}</h2>
                    <p className={styles.description}>{card.description}</p>
                    {card.description2 ? <p className={styles.description}>{card.description2}</p> : '' }
                    {card.description3 ? <p className={styles.description}>{card.description3}</p> : '' }
                </div>
                )
            }
        </>
    ) 
}