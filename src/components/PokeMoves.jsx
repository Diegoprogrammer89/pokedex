import React from 'react'

const PokeMoves = ({pokeInfo}) => {

    console.log(pokeInfo);

  return (
    <article className='pokeMoves'>
        <h2>Principal Moves</h2>
        <hr />
        <div className='movesContainer'>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[0]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[1]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[2]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[3]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[4]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[5]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[6]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[7]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[8]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[9]?.move.name}</p>
            </div>
            <div className='bg-move'>
                <p>{pokeInfo?.moves[10]?.move.name}</p>
            </div>
        </div>
    </article>
  )
}

export default PokeMoves