import PropTypes from 'prop-types';
import styles from '../styles/Description.module.scss'
import Collapse from './Collapse.jsx'
import starRed from '../../public/STAR_red.png'
import starGrey from '../../public/STAR_grey.png'

function Description({title, host, rating, location, equipments, tags, description}) {
    const equipString = equipments.join('\n')

    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img key={i} className={styles.description__star} src={starRed} alt="Red star"/>)
        } else {
            stars.push(<img key={i} className={styles.description__star} src={starGrey} alt="Grey star"/>)
        }
    }

    return (
        <div className={styles.description}>

            <div className={styles.description__section0}>
                {/* Title, location and tags */}
                <div className={styles.description__section1}>
                        <div className={styles.description__title}>{title}</div>
                        <div className={styles.description__location}>{location}</div>
                        <div className={styles.description__tags}>
                        {tags.map((item, index) => (
                                <div key={index} className={styles.description__tag}>{item}</div>
                        ))}
                    </div>
                </div>

                {/* Host and rating */}
                <div className={styles.description__section2}>
                    <div className={styles.description__host}>
                        <div className={styles.description__name}>{host.name}</div>
                        <img className={styles.description__img} src={host.picture} />
                    </div>
                    <div className={styles.description__rating}>
                        {stars}
                    </div>
                </div>
            </div>

            {/* Description and equipments */}
            <div className={styles.description__section3}>
                    <div className={styles.description__collapse} >
                        <Collapse title="Description" content={description}/>
                    </div>
                    <div className={styles.description__collapse} >
                      <Collapse title="Equipements" content={equipString}/>
                    </div>
            </div>
        </div>
    )
}

Description.propTypes = {
    title: PropTypes.string.isRequired,
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
};

export default Description