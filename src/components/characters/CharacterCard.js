import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    margin: 1em;
    width: 25%;
    text-align: left;
    background-color: rgba(	54,	56,	62,0.3);
    padding-bottom: 0.9em;
    border-radius:0.3rem;
    box-shadow: 0.5rem 0.1rem 1rem 0.1rem #202125;
`
const CardImg = styled.img`
    width: 100%;
    &:hover {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
`
const CardTitle = styled.p`
    color: var(--property);
    font-size: 1.4em;
    margin: 0.5em 0;
    text-align: left;
    padding-left: 0.3em;
    `
const CardLink = styled(Link)`
    text-decoration:none;
    color: var(--string);
    font-size: 1.4em;
    margin: 1em 0;
    padding-left: 0.3em;
 

`
const CharacterCard = ({id,name,image,location,status}) => {
  return (
    <Card id={id} key={id}>
        <Link to={`${id}`}>
        <CardImg src={image} alt={name}/>
        </Link>
        <CardTitle>{name}</CardTitle>
        <CardTitle style={{color: "var(--keyword)"}}>Status: <span style={{color: "white"}}>{status}</span></CardTitle>
        <CardLink to={location.url}> {location.name}</CardLink>
       
        </Card>
  )
}

export default CharacterCard