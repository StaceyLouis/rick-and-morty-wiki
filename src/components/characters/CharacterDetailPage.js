import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'


const CharContainer = styled.div`
  margin-top: 6em;
  display: flex;
  justify-content: center;
  .right{
    background-color: var(--dark-electric-blue);
    padding: 1em 4em 1em 0.6em;
    font-family: "Lora" ;
    text-align: left;
    color: var(--light-green);
    .name{
      color: var(--acid-green);
      font-size: 2.5em;
      margin: 0.5em 0;
      font-family: "Swifty";
      text-shadow: 0 0 10px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;

    }
    .species{
      color: var(--numeric);
      font-size: 1em;
      margin: 0.9em;
      font-weight: 600;
      text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;

    }

`

const CharacterDetailPage = ({characters}) => {

    const {id} = useParams()
    const selectCharById = id => characters.find(i => i.id ===parseInt(id))

    const character = selectCharById(id)
  return (
  
    <CharContainer>
      <div> <img src={character.image}/></div>
     <div className='right'>
     <h1 className='name'>{character.name}</h1>
     <hr/>
     <p className='species'>{character.species} -- {character.gender}</p>
       <p className='species'>Origin: {character.origin.name}</p>
       <p className='species'>Status: {character.status}</p>
       <p className='species'>Location: {character.location.name}</p> 
       <p className='species'>Episodes: {character.episode.length}</p>    
       </div>    
       </CharContainer>
       
      
  )
}

export default CharacterDetailPage