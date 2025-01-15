import PropTypes from 'prop-types'
import styles from '../styles/Banner.module.scss'

function Banner({text, img, alt}) {
    return (
        <div className={styles.banner}>
            <img className={styles.banner__img} src={img} alt={alt}/>
            <p className={styles.banner__text} >{text}</p>
        </div>
    )
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

export default Banner