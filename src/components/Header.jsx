import {NavLink} from 'react-router-dom'
import styles from '../styles/Header.module.scss'
import logoRed from '../../public/LOGO_red.png'

function Header() {

    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logoRed} alt="Logo Kasa" />
            <nav className={styles.header__nav}>
                <NavLink className={({isActive}) => `${styles.header__link} ${isActive ? styles.header__link_active :''}`} to={'/'}>Accueil</NavLink>
                <NavLink className={({isActive}) => `${styles.header__link} ${isActive ? styles.header__link_active :''}`} to={'/a-propos'}>A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header