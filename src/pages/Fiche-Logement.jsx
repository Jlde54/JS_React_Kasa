import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Fiche_Logement() {

    const param = useParams();

    return (
        <>
            <h1>Fiche logement : {param.id}</h1>
            <p>
                <Link to={'/'}>Home</Link>
            </p>
            <p>
                <Link to={'/a-propos'}>A propos</Link>
            </p>
        </>
    )

}

export default Fiche_Logement