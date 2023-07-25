import { useState } from 'react'
import { Button } from '../../common/Button/Button'
import { Hamburger } from './Hamburger/Hamburger'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { Logo } from './Logo/Logo'
import { Menu } from './Menu/Menu'

export const Header = () => {

    const [showHamburger, setShowHamburger] = useState(false)

    return (
        <div className={styles.container}>
            <Logo />
            <Menu showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
            <Link to='/contuct' ><Button title='Get in touch' addStyles={styles.button} /></Link>
            <Hamburger showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
        </div>
    )
}
