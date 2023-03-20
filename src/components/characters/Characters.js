import { Pagination } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Title from '../../utils/Title'
import CharacterCard from './CharacterCard'

import { Container, CharContainer } from '../../styles/StyleSheet'

const Characters = ({characters, count, current, handleChange}) => {

  console.log(current)
    const charList = characters.map(i =>(
       <CharacterCard key={i.id} id={i.id} name={i.name} image={i.image} location={i.location}
        status={i.status}/>
    ))
  return (
    <Container>
    <CharContainer>{charList}</CharContainer>
    <Pagination className="pagination"
      page={current}
      onChange={handleChange}
       count={count} 
     variant="outlined" shape="rounded"
     size="large"/>
    </Container>
  )
}

export default Characters