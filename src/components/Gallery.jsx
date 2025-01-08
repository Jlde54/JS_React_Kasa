import styles from '../styles/Gallery.module.scss'
import logements from '../../data/logements.json'
import Card from './Card'

function Gallery() {
    return (
        <div className={styles.gallery}>
            {logements.map((logement) => (
                <Card key={logement.id} data={logement}/>
            ))}
        </div>
    )
}

export default Gallery