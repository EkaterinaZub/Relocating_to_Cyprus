import styles from './Choice.module.css'
import { choice } from '../../data/choice'
import { Title } from '../../../common/Title/Title'
import { Section } from '../../../common/Section/Section'

export const Choice = () => {
    return (
        <div>
        <Section title='Why Choose Cyprus?' products={choice} addStyles={styles.section} span= 'ccc'/>
        </div>
        
    )
}

{/* <div className={styles.container}> */}
            // <div className={styles.choice}>
            // <Title title='Why Choose Cyprus?' addStyles={styles.title}/>
                // {/* <h2 className={styles.title}>Why Choose Cyprus? </h2> */}
                // <span className={styles.description}>When you’re searching for the ideal home you want everything to be perfect. This is why over the years more and more people from all around the world are choosing Cyprus as their ultimate destination. This smal Mediterranean mesmerizes millions of visitors every year.</span>
            // </div>
            // <div className={styles.icons}>
                // {
                //     choice.map(icon =>
                //         <div className={styles.icon} key={icon.id}>
                //             <img className={styles.img} src={icon.images.src} alt={icon.images.alt} />
                //             <h5 className={styles.header}>{icon.title}</h5>
                //             <span className={styles.text}>{icon.description}</span>
                //         </div>
                //     )
                // }
            // </div>
        // </div>