import { Title } from "../Title/Title"
import styles from './Banner.module.css'

export const Banner = ({addStyles, title })=>{
    return(
        <div className={[styles.banner, addStyles].join(' ')}>
                <div className={styles.container_title}>
                    <Title title={title} addStyles={styles.title} />
                </div>
            </div>
    )
}