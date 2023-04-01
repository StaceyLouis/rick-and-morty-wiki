import React from 'react'
import styled from 'styled-components'
import Title from '../../utils/Title'
import CharacterCard from './CharacterCard'
import { useState } from 'react'
import { Container, CharContainer } from '../../styles/StyleSheet'
import { motion } from 'framer-motion'
import { Pagination } from 'antd'

const SearchContainer = styled.footer`
    display: flex;
    justify-content: flex-end;
    `
const Characters = ({ characters, count, current, handleChange }) => {
  const [q, setQ] = useState('')
  const [searchParam] = useState(["name", "origin", "gender", "type", "status"]);
  console.log(current)
  const charList = characters.map(i => (
    <CharacterCard key={i.id} id={i.id} name={i.name} image={i.image} location={i.location}
      status={i.status} />
  ))

  const filtered = characters.filter(item => {
    return searchParam.some(newItem => {
      return (
        item[newItem].toString().toLowerCase()
          .indexOf(q.toLowerCase()) > -1
      )
    })
  })
  const searchResults = filtered.map(i => {
    return (
      <CharacterCard key={i.id} id={i.id} name={i.name} image={i.image} location={i.location}
        status={i.status} />
    )
  })

  console.log(filtered)

  if (q === '') {
    return (
      <motion.main
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
      >
        <Container>
          <SearchContainer>
            <input
              placeholder='Search...'
              value={q}
              onChange={(e) => setQ(e.target.value)}
            /></SearchContainer>

          <CharContainer>{charList}</CharContainer>
        {/*  <Pagination className="pagination"
            page={current}
            onChange={handleChange}
            count={count}
            variant="outlined" shape="rounded"
            size="large" />
    */}
    <Pagination
     onChange={handleChange}
     pageSizeOptions={[10, 20, 50, 100]}
     responsive={true}
     showLessItems={true}
     showQuickJumper={true}
     showSizeChanger={true}
     total={42}
     />

        </Container>
      </motion.main>
    )
  } else {
    return (
      <>
        <SearchContainer>
          <input
            placeholder='Search...'
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </SearchContainer>

        <CharContainer>{searchResults}</CharContainer>

      </>
    )
  }
}

export default Characters