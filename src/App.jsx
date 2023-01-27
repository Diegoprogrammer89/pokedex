import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'
import PinRocket from '/PinRocket.png'
import pokeCenter from '/CentroPokemon.png'
import Footer from './components/Footer'
import PokeFilter from './pages/PokeFilter'
import ProtectedRoutes from './pages/ProtectedRoutes'
import { useState } from 'react'


function App() {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">
      <nav className='NavBar'>
        <img src={PinRocket} alt="poke nav" />
        <ul>
          <li><Link className='navtext' to='/'><img src={pokeCenter} alt="" className='pokeCenter' /></Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home setIsLogged={setIsLogged}/> } />
          <Route element={ <ProtectedRoutes isLogged={isLogged}/> }>
            <Route path='/pokedex' element={ <Pokedex/> } />
            <Route path='/pokedex/:id' element={ <PokeInfo/> } />
            <Route path='/pokefilter/:type' element={ <PokeFilter/> }/>
          </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
