import styles from './Logo.module.css'
import {Link} from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
 
export const Logo = () => {
    return (
        <Link to='/' className={styles.logos}>
            <img src={logo} alt= 'logo'/>
        </Link>
    )

}