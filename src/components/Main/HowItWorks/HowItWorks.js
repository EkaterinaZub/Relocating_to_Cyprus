import { Section } from "../../../common/Section/Section"
import { howItWorks } from "../../data/howItWorks"
import styles from './HowItWorks.module.css'



export const HowItWorks = () => {

  return (
    <div>
      <Section title='how we make it happen' products={howItWorks} addStyles={styles.section} />
    </div>
  )
}