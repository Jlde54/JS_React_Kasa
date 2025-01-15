import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styles from '../styles/Card.module.scss'

function Card({data}) {
    const {id, cover, title} = data

    return (
        <Link to={`/fiche-logement/${id}`} className={styles.card}>
            <img className={styles.card__img} src={cover} alt={title} />
            <div className={styles.card__overlay}></div>
            <p className={styles.card__text}>{title}</p>
        </Link>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Card