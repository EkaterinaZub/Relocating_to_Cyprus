import styles from './Choice.module.css'
import { choice } from '../../data/choice'
import { Section } from '../../../common/Section/Section'

export const Choice = () => {
    return (
        <div>
            <Section title='Why Choose Cyprus?' products={choice} addStyles={styles.section} span='ccc' />
        </div>
    )
}

