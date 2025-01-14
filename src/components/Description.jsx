import PropTypes from 'prop-types';
import styles from '../styles/Description.module.scss'
import Collapse from './Collapse.jsx'
import starRed from '../assets/STAR_red.png'
import starGrey from '../assets/STAR_grey.png'

function Description({description}) {
    const equipString = description[4].join('\n')

    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < description[2]) {
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
                        <div className={styles.description__title}>{description[0]}</div>
                        <div className={styles.description__location}>{description[3]}</div>
                        <div className={styles.description__tags}>
                        {description[5].map((item, index) => (
                                <div key={index} className={styles.description__tag}>{item}</div>
                        ))}
                    </div>
                </div>

                {/* Host and rating */}
                <div className={styles.description__section2}>
                    <div className={styles.description__host}>
                        <div className={styles.description__name}>{description[1].name}</div>
                        <img className={styles.description__img} src={description[1].picture} />
                    </div>
                    <div className={styles.description__rating}>
                        {stars}
                    </div>
                </div>
            </div>

            {/* Description and equipments */}
            <div className={styles.description__section3}>
                    <div className={styles.description__collapse} >
                        <Collapse title="Description" content={description[6]}/>
                    </div>
                    <div className={styles.description__collapse} >
                      <Collapse title="Equipements" content={equipString}/>
                    </div>
            </div>
        </div>
    )
}

Description.propTypes = {
    description: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Description