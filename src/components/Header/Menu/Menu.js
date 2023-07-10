import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import { useState } from 'react'

// {showMenu, setShowMenu}
export const Menu = ({showHamburger, setShowHamburger}) => {

    const [showMenu, setShowMenu] = useState(false)
    console.log(showMenu)
    
    return (
        <div  className={[styles.container, showHamburger ? styles.navHeader : ''].join(' ')} >

            <Link to='' className={styles.menu}>HOME</Link>
            <Link to='' className={styles.menu}>ABOUT US</Link>
            <Link to=' ' className={styles.menu } onClick={() => setShowMenu(!showMenu)}>SERVICES &#65088;</Link>
            <div className={[styles.subMenu , showMenu ? styles.subMenuShow : ''].join(' ')}>
                <Link to='' className={styles.subMenu_item}>Investments opportunities</Link>
                <Link to='' className={styles.subMenu_item}>Business relocation</Link>
                <Link to='' className={styles.subMenu_item}>Family relocation</Link>

            </div>
            
            <Link to='' className={styles.menu}>INVEST IN CYPRUS</Link>
            <Link to='' className={styles.menu}>MIGRATION</Link>
            <Link to='' className={styles.menu}>CONTUCT US</Link>



        </div>
    )
}