import {Link} from 'react-router-dom'

function Home() {
    
    return (
        <>
            <h1>Home</h1>
            <p>
                <Link to={'/a-propos'}>A propos</Link>
            </p>
            <p>
                <Link to={'/fiche-logement/Logement 1'}>Fiche logement</Link>
            </p>
        </>
    )
}

export default Home