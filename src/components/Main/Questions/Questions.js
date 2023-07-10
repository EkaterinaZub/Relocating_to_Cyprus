
import { Title } from '../../../common/Title/Title'
import { QuestionCarousel } from './QuestionCarousel.js/QuestionCarousel'
import styles from './Questions.module.css'

export const Questions = ()=>{
    return(
        <div className={styles.container}>
        <Title title='Frequently Asked Questions' addStyles={styles.title}/>

        <QuestionCarousel/>

        </div> 
        
    )
}