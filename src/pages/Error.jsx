import {Link} from 'react-router-dom'
import styles from '../styles/Error.module.scss'

function Error() {

    return (
        <div className={styles.error}>
            <p className={styles.error__404}>404</p>
            <p className={styles.error__msg}>Oups! La page que vous demandez n'existe pas</p>
            <nav className={styles.error__nav}>
                <Link className={styles.error__link} to={'/'}>Retourner sur la page d&apos;accueil</Link>
            </nav>
        </div>
    )
}

export default Error