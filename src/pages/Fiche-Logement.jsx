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
    const pictures = selectedLogement.pictures

    const description = [
            selectedLogement.title,
            selectedLogement.host,
            selectedLogement.rating,
            selectedLogement.location,
            selectedLogement.equipments,
            selectedLogement.tags,
            selectedLogement.description
    ]

    return (
        <div className={styles.ficheLogement}>
            <Slider pictures={pictures}/>
            <Description description={description} />
        </div>
    )
}

export default Fiche_Logement