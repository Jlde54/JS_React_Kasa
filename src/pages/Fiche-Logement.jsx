import { useParams } from 'react-router-dom'
import Slider from '../components/Slider'
import Description from '../components/Description'
import styles from '../styles/Fiche-Logement.module.scss'
import logements from '../../data/logements.json'
import Error from './Error.jsx';

function Fiche_Logement() {

    const param = useParams();

    const selectedLogement = logements.find(logement => logement.id === param.id)

    if (!selectedLogement) {
        return <Error />
    }

    const { pictures, title, host, rating, location, equipments, tags, description } = selectedLogement;

    return (
        <div className={styles.ficheLogement}>
            <Slider pictures={pictures}/>
            <Description 
                title={title}
                host={host}
                rating={parseFloat(rating)}
                location={location}
                equipments={equipments}
                tags={tags}
                description={description}
            />
        </div>
    )
}

export default Fiche_Logement