import { useParams } from 'react-router-dom'
import styles from '../styles/Fiche-Logement.module.scss'

function Fiche_Logement() {

    const param = useParams();

    return (
        <>
            <h1 className={styles.h1}>Fiche logement : {param.id}</h1>
        </>
    )

}

export default Fiche_Logement