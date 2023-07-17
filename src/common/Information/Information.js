import styles from './Information.module.css'

export const Information = ({ addStyles, paragraph, addStyles2, addStyles3 , header, text1, text2,list1, list2, list3, list4, list5, list6,list7, text3 }) => {
    return (
        <div className={[styles.container, addStyles].join(' ')}>
            <div className={[styles.discription, addStyles3].join(' ')}>
                <h3 className={styles.title}>{header}</h3>
                <p className={styles.text}>{text1} </p>
                {paragraph && <p className={styles.text}>{paragraph} </p>}

                {text2 && <p className={styles.text}>{text2} </p>}

                <ul className={styles.list}>
                    <li className={styles.text}>{list1}</li>
                    <li className={styles.text}>{list2}</li>
                    <li className={styles.text}>{list3} </li>
                    {list4 && <li className={styles.text}>{list4}</li>}
                    {list5 && <li className={styles.text}>{list5}</li>}
                    {list6 && <li className={styles.text}>{list6}</li>}
                    {list7 && <li className={styles.text}>{list7}</li>}
                </ul>
                <p className={styles.text}>{text3}</p>
            </div>
            <div className={[styles.images, addStyles2].join(' ')}>

            </div>
        </div>
    )
}