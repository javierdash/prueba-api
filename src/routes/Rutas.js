import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
//components
import Home from "../components/Home"
import Buscador from "../components/Buscador"
import Resultados from "../components/Resultados"
import Navbar from "../components/Navbar"

const Rutas = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
            <Route path="/" exact element=<Home /> />
            <Route path="/buscador" exact element=<Buscador /> />
            <Route path="/resultados" exact element=<Resultados /> />
      </Routes>
    </Router>
    </>
  )
}

export default Rutas