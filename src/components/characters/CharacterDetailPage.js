import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const CharacterDetailPage = ({characters}) => {
    const {id} = useParams()
    const selectCharById= id => characters.find(i => i.id ===parseInt(id))
    const character = selectCharById(id)
  return (
    <div>
      <>
       <h1>{character.name}</h1>
        <img src={character.image} />
        </>
        <>
        <h2>Stats</h2>
        </>
        
    </div>
  )
}

export default CharacterDetailPage