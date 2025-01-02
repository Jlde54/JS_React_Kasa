import {Link} from 'react-router-dom'

function Error() {

    return (
        <>
            <h1>Erreur</h1>
            <p>
                <Link to={'/'}>Home</Link>
            </p>
        </>
    )

}

export default Error