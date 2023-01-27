import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCardFilter = ({typeUrl}) => {

    const [pokemon, setPokemon] = useState()
    
    useEffect (() => {
        axios.get (typeUrl)
            .then( res => setPokemon(res.data) )
            .catch(error => console.log(error))
    }, [])

    console.log(pokemon);

    const navigate = useNavigate ()

    const clickCard = () => navigate ( `/pokedex/${pokemon.id}` ) 

  return (
    <article className='pokeCard' onClick={clickCard}>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <h2>Name: {pokemon?.name}</h2>
            <hr />
            <div className='infoCard'>
              <p><b>HP: </b>{pokemon?.stats[0].base_stat}</p>
              <p><b>Attack: </b>{pokemon?.stats[1].base_stat}</p>
              <p><b>Defense: </b>{pokemon?.stats[2].base_stat}</p>
              <p><b>Sp.Attack: </b>{pokemon?.stats[3].base_stat}</p>
              <p><b>Sp.Defennse: </b>{pokemon?.stats[4].base_stat}</p>
              <p><b>Speed: </b>{pokemon?.stats[5].base_stat}</p>
            </div>
    </article>
  )
}

export default PokeCardFilter