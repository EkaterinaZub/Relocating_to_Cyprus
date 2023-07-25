import { Information } from '../../common/Information/Information'
import { Title } from '../../common/Title/Title'
import styles from './Migration.module.css'
import { constants } from '../../constants/constants'
import { Link } from 'react-router-dom'

import { Banner } from '../../common/Banner/Banner'

export const Migration = () => {
    return (
        <div className={styles.container}>
            <Banner title="Moving to Cyprus"
                addStyles={styles.banner} />

            <Information addStyles2={styles.image}
                header={constants.migration_block1.header}
                text1={constants.migration_block1.text1}
                paragraph={constants.migration_block2.paragraph}
                text2={constants.migration_block1.text2}
                list1={constants.migration_block1.list1}
                list2={constants.migration_block1.list2}
                list3={constants.migration_block1.list3}
                list4={constants.migration_block1.list4}
                list5={constants.migration_block2.list5}
                list6={constants.migration_block2.list6}
                list7={constants.migration_block2.list7}
                text3={constants.migration_block1.text3}
            />
            <Information addStyles2={styles.image2}
                addStyles3={styles.order}
                header={constants.migration_block2.header}
                text1={constants.migration_block2.text1}
                text2={constants.migration_block2.text2}
                list1={constants.migration_block2.list1}
                list2={constants.migration_block2.list2}
                list3={constants.migration_block2.list3}
                list4={constants.migration_block2.list4}
                list5={constants.migration_block2.list5}
                list6={constants.migration_block2.list6}
                list7={constants.migration_block2.list7}
                text3={constants.migration_block2.text3}
            />
            <Information addStyles2={styles.image3}
                header={constants.migration_block3.header}
                text1={constants.migration_block3.text1}
                list1={constants.migration_block3.list1}
                list2={constants.migration_block3.list2}
                list3={constants.migration_block3.list3}
                list4={constants.migration_block3.list4}
                list5={constants.migration_block2.list5}
                list6={constants.migration_block2.list6}
                list7={constants.migration_block2.list7}
                text3={constants.migration_block3.text3}
            />

            <div className={styles.section}>
                <Title title="How We Can Help" addStyles={styles.container_title} />

                <p className={styles.discription}>Leaving your home country to settle in another is always accompanied by complex immigration processes such as registration, finding housing, signing documents, opening a bank account, finding schooling for your children, and much more. This process can make anyone feel stressed and uncertain about the next move. For this reason, our all-encompassing services make sure to make the relocation process as smooth as possible by handling everything that has to do with relocating your family and your business to Cyprus. </p>
                <ul className={styles.containerLink}>
                    <li className={styles.link}><Link to='/business' className={[styles.discription, styles.link].join('')}>Business relocation</Link></li>
                    <li className={styles.link}><Link to='/family' className={[styles.discription, styles.link].join('')}>Family relocation</Link></li>

                    <li className={styles.link}><Link to='/investments' className={[styles.discription, styles.link].join('')}>Investments opportunities</Link></li>
                </ul>

                <span className={styles.discription}>We want you to feel confident in your decision to relocate to Cyprus, as we take care of the challenging parts of moving. Moving to Cyprus is in itself an investment in your future.
                </span>




            </div>


        </div>
    )
}