import styles from '../styles/Footer.module.scss'
import logoWhite from '../assets/LOGO_white.png'

function Footer() {

    return (
        <footer className={styles.footer} >
            <img className={styles.footer__logo} src={logoWhite} alt="Logo Kasa" />
            <p className={styles.footer__text}>2025 Kasa. All rights reserved</p>
        </footer>
    )

}

export default Footer