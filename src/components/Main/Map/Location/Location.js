import { Title } from "../../../../common/Title/Title"
import styles from './Location.module.css'
import cyprus_map from '../../../../assets/images/map/cyprus_map.png'
import larnaka_map from '../../../../assets/images/map/larnaka_map.png'
import limassol_map from '../../../../assets/images/map/limassol_map.png'
import nicosia_map from '../../../../assets/images/map/nicosia_map.png'
import paphos_map from '../../../../assets/images/map/paphos_map.png'


export const Location = ()=>{
    return(
        
            <div className={styles.map}>
            <img className={styles.cyprus} src={cyprus_map} alt='cyprus_map'/> 
            <img className={styles.larnaka} src={larnaka_map} alt='larnaka_map'/> 
            <img className={styles.limassol} src={limassol_map} alt='limassol_map'/> 
            <img className={styles.nicosia} src={nicosia_map} alt='nicosia_map'/> 
            <img className={styles.paphos} src={paphos_map} alt='paphos_map'/> 
            
                
            </div>
       
    )
}