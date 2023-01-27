import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({url}) => {

    const [pokemon, setPokemon] = useState()
    
    useEffect (() => {
        axios.get(url)
            .then( res => setPokemon(res.data) )
            .catch(error => console.log(error))
    }, [])

    // console.log(pokemon);

    const navigate = useNavigate ()

    const clickCard = () => navigate ( `/pokedex/${pokemon.id}` ) 

  return (
    <article className='pokeCard' onClick={clickCard}>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <h2>{pokemon?.name.toUpperCase()}</h2>
            <hr />
            <div className='infoCard'>
              <p><b>HP</b><br /><b className='b2'>{pokemon?.stats[0].base_stat}</b></p>
              <p><b>Speed</b><br /><b className='b2'>{pokemon?.stats[5].base_stat}</b></p>
              <p><b>Attack</b><br /><b className='b2'>{pokemon?.stats[1].base_stat}</b></p>
              <p><b>Defense</b><br /><b className='b2'>{pokemon?.stats[2].base_stat}</b></p>
              <p><b>Sp.Attack</b><br /><b className='b2'>{pokemon?.stats[3].base_stat}</b></p>
              <p><b>Sp.Defense</b><br /><b className='b2'>{pokemon?.stats[4].base_stat}</b></p>
            </div>
    </article>
  )
}

export default PokeCard