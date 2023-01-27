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



  const navigate = useNavigate ()
  const clickBack = () => navigate ('/pokedex')

  return (
    <article className='pokeInfoCard'>
      <div className='baseInfo'>
        <div className='pokeImage'>
          <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="pokemon picture" className='pokemonPicture'/>
        </div>
        <hr />
        <h2>{pokeInfo?.name.toUpperCase()}</h2>
        <div className='divition1'>
        <p><b>Weight</b><br /><b className='b2'>{pokeInfo?.weight}</b></p>
          <p><b>Height</b><br /><b className='b2'>{pokeInfo?.height}</b></p>
          <p><b>Base Experience</b><br /><b className='b2'>{pokeInfo?.base_experience}</b></p>
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
        <button onClick={clickBack} className='goBack'>Back!</button>
      </div>
    </article>
  )
}

export default PokeInfo