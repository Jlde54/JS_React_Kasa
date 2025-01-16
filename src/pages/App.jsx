import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'
import A_propos from './A-Propos.jsx'
import Fiche_Logement from './Fiche-Logement.jsx'
import Error from './Error.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/App.scss'

function App() {

  const ROUTES = {
    HOME: '/',
    APROPOS: '/a-propos',
    FICHELOGEMENT: '/fiche-logement/:id',
    ERROR: '*'
  }

  return (
    <>
      <HashRouter>
        <Header />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />}/>
            <Route path={ROUTES.APROPOS} element={<A_propos />} />
            <Route path={ROUTES.FICHELOGEMENT} element={<Fiche_Logement />} />
            <Route path={ROUTES.ERROR} element={<Error />} />
          </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
