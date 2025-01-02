import {Link} from 'react-router-dom'

function A_Propos() {

    return (
        <>
            <h1>A propos</h1>
            <p>
                <Link to={'/'}>Home</Link>
            </p>
            <p>
                <Link to={'/fiche-logement'}>Fiche logement</Link>
            </p>
        </>
    )

}

export default A_Propos