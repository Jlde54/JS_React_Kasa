import { useParams } from 'react-router-dom'
import Slider from '../components/Slider'
import styles from '../styles/Fiche-Logement.module.scss'
import logements from '../../data/logements.json'

function Fiche_Logement() {

    const param = useParams();
    const selectedLogement = logements.find(logement => logement.id === param.id)
    const pictures = selectedLogement.pictures

    return (
        <div className={styles.ficheLogement}>
            <Slider pictures={pictures}/>
        </div>
    )

}

export default Fiche_Logement