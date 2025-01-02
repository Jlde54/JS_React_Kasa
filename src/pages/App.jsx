import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'
import A_propos from './A-Propos.jsx'
import Fiche_Logement from './Fiche-Logement.jsx'
import Error from './Error.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/a-propos'} element={<A_propos />} />
          <Route path={'/fiche-logement/:id'} element={<Fiche_Logement />} />
          <Route path={'*'} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
