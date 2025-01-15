import styles from '../styles/Gallery.module.scss'
import logements from '../../data/logements.json'
import Card from './Card'

function Gallery() {
    return (
        <section className={styles.gallery}>
            {logements.map((logement) => (
                <Card 
                    key={logement.id} 
                    data={logement}/>
            ))}
        </section>
    )
}

export default Gallery