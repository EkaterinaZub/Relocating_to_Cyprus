import { useState } from 'react'
import { Button } from '../../common/Button/Button'
import { Hamburger } from './Hamburger/Hamburger'
import styles from './Header.module.css'
import { Logo } from './Logo/Logo'
import { Menu } from './Menu/Menu'

export const Header = ()=>{

    const [showHamburger, setShowHamburger] = useState(false)
    // console.log(showHamburger)

    return(
        <div className={styles.container}>

        <Logo/>
        <Menu showHamburger={showHamburger} setShowHamburger={setShowHamburger}/>
        
        <Button title= 'Get in touch' addStyles={styles.button}/>
        <Hamburger  showHamburger={showHamburger} setShowHamburger={setShowHamburger}/>
        


        </div>
    )
}
// {showMenu, setShowMenu}
// showMenu={showMenu} setShowMenu={setShowMenu}
// showHamburger={showHamburger} setShowHamburger={setShowHamburger}