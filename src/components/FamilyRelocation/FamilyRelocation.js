import { Information } from '../../common/Information/Information'
import { Title } from '../../common/Title/Title'
import styles from './FamilyRelocation.module.css'
import { constants } from '../../constants/constants'
import { Section } from '../../common/Section/Section'
import {help} from '../data/help'
import { Banner } from '../../common/Banner/Banner'

export const FamilyRelocation = () => {
    return (
        <div className={styles.container}>
        <Banner title="Family Relocation to Cyprus" 
        addStyles={styles.banner} />
            
            <Information addStyles2={styles.image}
                header={constants.family_block1.header}
                text1={constants.family_block1.text1}
                text2={constants.family_block1.text2}
                list1={constants.family_block1.list1}
                list2={constants.family_block1.list2}
                list3={constants.family_block1.list3}
                list4={constants.family_block1.list4}
                text3={constants.family_block1.text3}
            />
            <Information addStyles2={styles.image2}
            addStyles3={styles.order}
                header={constants.family_block2.header}
                text1={constants.family_block2.text1}
                text2={constants.family_block2.text2}
                list1={constants.family_block2.list1}
                list2={constants.family_block2.list2}
                list3={constants.family_block2.list3}
                list4={constants.family_block2.list4}
                text3={constants.family_block2.text3}
            />
            <Information addStyles2={styles.image3}
                header={constants.family_block3.header}
                text1={constants.family_block3.text1}
                text2={constants.family_block3.text2}
                list1={constants.family_block3.list1}
                list2={constants.family_block3.list2}
                list3={constants.family_block3.list3}
                list4={constants.family_block3.list4}
                text3={constants.family_block3.text3}
            />

            <Section title='How We Can Help' products={help} 
            addStyles={styles.section}
            addStyles3={styles.icons}
            />
        </div>
    )
}