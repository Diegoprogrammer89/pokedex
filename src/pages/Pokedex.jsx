import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InputSelector from '../components/InputSelector'
import Pagination from '../components/Pagination'
import PokeCard from '../components/PokeCard'
import PokedexPro from '/PokedexPro.png'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokemonsTable, setPokemonsTable] = useState()
  const [search, setSearch] = useState()

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(20)

  const nameUser = useSelector( state => state.nameUser )

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

  const getAllPokemons = () => {
    axios.get(URL)
      .then(res => {
        setPokemons(res.data.results)
        setPokemonsTable(res.data.results)
      })
      .catch(error => console.log(error))
  }

  useEffect (() => {
    getAllPokemons()
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
    filterer(e.target.value)
    e.preventDefault()
  }

  const filterer = (searchTerm) => {
    let searchResult = pokemonsTable.filter((element) => {
      if(element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return element;
      }
    })
    setPokemons(searchResult);
  }

  const max = pokemons?.length / perPage

  
  return (
    <article className='principalCard'>
      <div className='header'>
        <img src={PokedexPro} alt="" />
        <h3>Welcome {nameUser}, ready to catch your pokemon?</h3>
      </div>
      <div className='filter'>
        <input type="text" placeholder='Search Pokemon' value={search} onChange={handleChange}/>
      </div>
      <div className='inputSelector'>
        <InputSelector />
      </div>
      <div className='superiorPages'>
        <Pagination page={page} setPage={setPage} max={max} />
      </div>
      <div className='cards'>
        {
          pokemons
          ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage
          ).map( pokemon => (
            <PokeCard 
              key={ pokemon.url }
              url={ pokemon.url }
            />
          ))
        }
      </div>
      <div className='pages'>
        <Pagination page={page} setPage={setPage} max={max} />
      </div>
    </article>
  )
}

export default Pokedex