import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PaginationFilter from '../components/PaginationFilter'
import PokeCardFilter from '../components/PokeCardFilter'

const PokeFilter = () => {

    const [typePokemon, setTypePokemon] = useState()

    const [search, setSearch] = useState()
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(20)

    const {type} = useParams()

    useEffect (() => {
        axios.get (`https://pokeapi.co/api/v2/type/${type}/`)
            .then ( res => setTypePokemon(res.data?.pokemon) )
            .catch (error => console.log(error))
    }, [type])

    // console.log(typePokemon);

    const handleChange = e => {
      setSearch(e.target.value)
      filter(e.target.value)
      e.preventDefault()
    }
  
    const filter = (searchTerm) => {
      let searchResult = pokemons.filter((element) => {
        if(element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())){
          return element;
        } 
      })
      setPokemons(searchResult);
    }
  
    const max = typePokemon?.length / perPage

    const navigate = useNavigate ()
    const removeFilter = () => navigate ('/pokedex')

  return (
    <article className='principalCardFilter'>
      <div className='removeFilter'>
        <button onClick={removeFilter}>Remove filter</button>
      </div>
        <div className='pagesSuperior'>
          <PaginationFilter page={page} setPage={setPage} max={max}/>
        </div>
        {
          typePokemon?.slice((page - 1) * perPage, (page - 1) * perPage + perPage
          ).map( poketype => (
            <PokeCardFilter 
                key={ poketype.pokemon.url }
                typeUrl={ poketype.pokemon.url }
            />
          ))
        }
        <div className='pagesInferior'>
          <PaginationFilter page={page} setPage={setPage} max={max}/>
        </div>
    </article>
  )
}

export default PokeFilter