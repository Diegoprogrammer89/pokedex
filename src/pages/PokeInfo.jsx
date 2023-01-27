import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import PokeMoves from '../components/PokeMoves'

const PokeInfo = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const {id} = useParams()

  useEffect (() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
      axios.get(URL)
          .then(res => setPokeInfo(res.data))
          .catch(error => console.log(error))
  }, [id])

  // console.log(pokeInfo);

  const navigate = useNavigate ()
  const clickBack = () => navigate ('/pokedex')

  return (
    <article className='pokeInfoCard'>
      <div className='baseInfo'>
        <div className='pokeImage'>
          <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="pokemon picture" className='pokemonPicture'/>
        </div>
        <hr />
        <h2><b>Name: </b>{pokeInfo?.name}</h2>
        <div className='divition1'>
          <p><b>Weight: </b>{pokeInfo?.weight}</p>
          <p><b>Height: </b>{pokeInfo?.height}</p>
          <p><b>Base Experience: </b>{pokeInfo?.base_experience}</p>
        </div>
      </div>
      <div className='abilities'>
        <h2>Abilities</h2>
        <hr />
        <div className='divition2'>
          <p>{pokeInfo?.abilities[0]?.ability.name}</p>
          <p>{pokeInfo?.abilities[1]?.ability.name}</p>
        </div>
      </div>
      <div className='type'>
        <h2>Type</h2>
        <hr />
        <div className='divition3'>
          <p>{pokeInfo?.types[0]?.type.name}</p>
          <p>{pokeInfo?.types[1]?.type.name}</p>
        </div>
      </div>
      <div className='moves'>
          <PokeMoves pokeInfo={pokeInfo}/>
      </div>
      <div className='goBackButton'>
        <button onClick={clickBack} className='goBack'>Go back!</button>
      </div>
    </article>
  )
}

export default PokeInfo