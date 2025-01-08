import {Link} from 'react-router-dom'
import styles from '../styles/Header.module.scss'
import logoRed from '../assets/LOGO_red.png'

function Header() {

    return (
        <div className={styles.header}>
            <img className={styles.header__logo} src={logoRed} alt="Logo Kasa" />
            <nav className={styles.header__nav}>
                <Link className={styles.header__link} to={'/'}>Accueil</Link>
                <Link className={styles.header__link} to={'/a-propos'}>A propos</Link>
            </nav>
        </div>
    )
}

export default Header