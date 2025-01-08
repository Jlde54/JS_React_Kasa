import {Link} from 'react-router-dom'
import styles from '../styles/Card.module.scss'

function Card(logement) {
    return (
        <Link to={`/fiche-logement/${logement.data.id}`} className={styles.card}>
            <img className={styles.card__img} src={logement.data.cover} alt={logement.data.title} />
            <div className={styles.card__overlay}></div>
            <p className={styles.card__text}>{logement.data.title}</p>
        </Link>
    )
}

export default Card