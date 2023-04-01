import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.footer`
    display: flex;
    justify-content: flex-end;
    `
const Search = ({characters}) => {
    const [q, setQ] = useState('')
    const [searchParam] = useState(["name"]);

    const filtered = characters.filter(item =>{
        return searchParam.some(newItem =>{
            return(
                item[newItem].toString().toLowerCase()
                .indexOf(q.toLowerCase()) > -1
            )
        })
    })

    console.log(filtered)

  return (
    <Container>
        <input
         placeholder='Search...'
         value={q}
         onChange={(e)=> setQ(e.target.value)}
        />

{filtered.map(i => {
            return(
                <div key={i.id}>
                    <h1>{i.name}</h1>
                    <img src={i.image} alt={i.name}/>
                </div>
            )
        })}
    </Container>
  )
}

export default Search