import styles from './BusinessRelocation.module.css'
import { Banner } from '../../common/Banner/Banner'
import { Information } from '../../common/Information/Information'
import { constants } from '../../constants/constants'
import { Section } from '../../common/Section/Section'
import { helpBusiness } from '../data/helpBusiness'

export const BusinessRelocation = ()=>{
return (
    <div className={styles.container}>
       <Banner title="Business Relocation" 
        addStyles={styles.banner} />
            
            <Information addStyles2={styles.image}
                header={constants.business_block1.header}
                text1={constants.business_block1.text1}
                list1={constants.business_block1.list1}
                list2={constants.business_block1.list2}
                list3={constants.business_block1.list3}
                list4={constants.business_block1.list4}
                list5={constants.business_block1.list5}
                list6={constants.business_block1.list6}
                text3={constants.business_block1.text3}
            />
            <Information addStyles2={styles.image2}
            addStyles3={styles.order}
                header={constants.business_block2.header}
                text1={constants.business_block2.text1}
                text2={constants.business_block2.text2}
                list1={constants.business_block2.list1}
                list2={constants.business_block2.list2}
                list3={constants.business_block2.list3}
                list4={constants.business_block2.list4}
                list5={constants.business_block2.list5}
                list6={constants.business_block2.list6}
                list7={constants.business_block2.list7}
                text3={constants.business_block2.text3}
            />
            <Information addStyles2={styles.image3}
                header={constants.business_block3.header}
                text1={constants.business_block3.text1}
                list1={constants.business_block3.list1}
                list2={constants.business_block3.list2}
                list3={constants.business_block3.list3}
                list4={constants.business_block3.list4}
                list5={constants.business_block3.list5}
                text3={constants.business_block3.text3}
            />

            <Section title='How We Can Help' 
            products={helpBusiness} 
            addStyles={styles.section}
            addStyles3={styles.icons}
            />
    </div>
)
}