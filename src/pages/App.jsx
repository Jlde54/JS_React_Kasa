import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'
import A_propos from './A-Propos.jsx'
import Fiche_Logement from './Fiche-Logement.jsx'
import Error from './Error.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/a-propos'} element={<A_propos />} />
            <Route path={'/fiche-logement/:id'} element={<Fiche_Logement />} />
            <Route path={'*'} element={<Error />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
