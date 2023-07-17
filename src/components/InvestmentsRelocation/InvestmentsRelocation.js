import styles from './investmentsRelocation.module.css'
import { Banner } from '../../common/Banner/Banner'
import { Information } from '../../common/Information/Information'
import { constants } from '../../constants/constants'
import { helpInvestments } from '../data/helpInvestments'
import { Section } from '../../common/Section/Section'

export const InvestmentsRelocation = ()=>{
return (
    <div className={styles.container}>
        <Banner title="Investment Opportunities" 
        addStyles={styles.banner} />
            
            <Information addStyles2={styles.image}
                header={constants.investments_block1.header}
                text1={constants.investments_block1.text1}
               
                text2={constants.investments_block1.text2}
                list1={constants.investments_block1.list1}
                list2={constants.investments_block1.list2}
                list3={constants.investments_block1.list3}
                
                text3={constants.investments_block1.text3}
            />
            <Information addStyles2={styles.image2}
            addStyles3={styles.order}
                header={constants.investments_block2.header}
                text1={constants.investments_block2.text1}
                paragraph={constants.investments_block2.paragraph}
                text2={constants.investments_block2.text2}
                list1={constants.investments_block2.list1}
                list2={constants.investments_block2.list2}
                list3={constants.investments_block2.list3}
                list4={constants.investments_block2.list4}
                
                list5={constants.investments_block2.list5}
                list6={constants.investments_block2.list6}
                list7={constants.investments_block2.list7}
                
                text3={constants.investments_block2.text3}
            />
            <Information addStyles2={styles.image3}
                header={constants.investments_block3.header}
                text1={constants.investments_block3.text1}
                paragraph={constants.investments_block3.paragraph}
                text2={constants.investments_block3.text2}
                list1={constants.investments_block3.list1}
                list2={constants.investments_block3.list2}
                list3={constants.investments_block3.list3}
                list4={constants.investments_block3.list4}
                list5={constants.investments_block3.list5}
                text3={constants.investments_block3.text3}
            />

            <Section title='How We Can Help' products={helpInvestments} 
            addStyles={styles.section}
            addStyles3={styles.icons}
            />
        </div>
)
}