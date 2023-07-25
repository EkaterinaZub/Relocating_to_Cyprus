import styles from './Section.module.css'
import { Title } from '../Title/Title'


export const Section = ({ products, title, span, addStyles, addStyles2, addStyles3 }) => {
    return (

        <div className={[styles.container, addStyles].join(' ')}>
            <Title title={title} addStyles={styles.container_title} />
            {span ? <span className={styles.description}>When you’re searching for the ideal home you want everything to be perfect. This is why over the years more and more people from all around the world are choosing Cyprus as their ultimate destination. This smal Mediterranean mesmerizes millions of visitors every year.</span> : ' '}
            <div className={[styles.icons, addStyles2].join(' ')}>
                {
                    products.map(icon =>
                        <div className={[styles.icon, addStyles3].join(' ')} key={icon.id}>
                            <img className={styles.img} src={icon.images.src} alt={icon.images.alt} />
                            <h5 className={styles.header}>{icon.title}</h5>
                            <span className={styles.text}>{icon.description}</span>
                        </div>
                    )
                }

            </div>

        </div>
    )
}