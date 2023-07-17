import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import { useState } from 'react'

// {showMenu, setShowMenu}
export const Menu = ({showHamburger, setShowHamburger}) => {

    const [showMenu, setShowMenu] = useState(false)
    // console.log(showMenu)
    
    return (
        <div  className={[styles.container, showHamburger ? styles.navHeader : ''].join(' ')} >

            <Link to='/' className={styles.menu}>HOME</Link>
            <Link to='/about' className={styles.menu}>ABOUT US</Link>
            <span className={styles.menu } onClick={() => setShowMenu(!showMenu)}>SERVICES &#65088;</span>
            <div className={[styles.subMenu , showMenu ? styles.subMenuShow : ''].join(' ')} onClick={() => setShowMenu(!showMenu)}>
                <Link to='/investments' className={styles.subMenu_item}>Investments opportunities</Link>
                <Link to='/business' className={styles.subMenu_item}>Business relocation</Link>
                <Link to='/family' className={styles.subMenu_item}>Family relocation</Link>

            </div>
            
            <Link to='/invest' className={styles.menu}>INVEST IN CYPRUS</Link>
            <Link to='/migration' className={styles.menu}>MIGRATION</Link>
            <Link to='/contuct' className={styles.menu}>CONTUCT US</Link>



        </div>
    )
}