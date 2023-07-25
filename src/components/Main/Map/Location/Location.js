
import styles from './Location.module.css'
import cyprus_map from '../../../../assets/images/map/cyprus_map.png'
import larnaka_map from '../../../../assets/images/map/larnaka_map.png'
import limassol_map from '../../../../assets/images/map/limassol_map.png'
import nicosia_map from '../../../../assets/images/map/nicosia_map.png'
import paphos_map from '../../../../assets/images/map/paphos_map.png'



export const Location = ({ handleclick }) => {


    return (

        <div className={styles.map}>
            <img className={styles.cyprus} src={cyprus_map} alt='cyprus_map' />
            <img onClick={handleclick} id='larnaka' className={styles.larnaka} src={larnaka_map} alt='larnaka_map' />
            <img onClick={handleclick} id='limassol' className={styles.limassol} src={limassol_map} alt='limassol_map' />
            <img onClick={handleclick} id='nicosia' className={styles.nicosia} src={nicosia_map} alt='nicosia_map' />
            <img onClick={handleclick} id='paphos' className={styles.paphos} src={paphos_map} alt='paphos_map' />


        </div>

    )
}