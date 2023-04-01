import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    margin: 1em;
    width: 20%;
    text-align: left;
    background-color: rgba(	54,	56,	62,0.3);
    padding-bottom: 0.9em;
    border-radius:0.3rem;
    box-shadow: 0.5rem 0.1rem 1rem 0.1rem #202125;
`
const ImgContainer = styled.div`
    position: relative;
    width: 100%;  
  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  
 
  &:hover .middle {
    opacity: 1;
  }
  
  .text {
    background-color: #282c34;
    color: white;
    font-size: 1em;
    padding: 0.5em 1.5em;
    .name{
      color: var(--numeric);
      margin-bottom: 0.3rem;
    }
  }
`
const CardImg = styled.img`
opacity: 1;
display: block;
width: 100%;
height: auto;
transition: .5s ease;
backface-visibility: hidden;
&:hover{
    opacity: 0.3;
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
        <ImgContainer>
        <CardImg src={image} alt={name}/>
        <div className="middle">
    <div className="text"> <span className='name'>{name}</span><br/><img src="https://img.icons8.com/carbon-copy/40/ffffff/long-arrow-right.png"/></div>
  </div>
            </ImgContainer>
        </Link>
        
       
        </Card>
  )
}

export default CharacterCard