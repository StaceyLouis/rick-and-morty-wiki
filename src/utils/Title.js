import '../App.css'
import styled from 'styled-components'

const Titles = styled.h1`
    font-size: 2em;
    color: var(--numeric);
    margin: 2em 0;
    font-family: "Swifty";
`
const Title = ({title}) => {
 
  return (
    <Titles >{title}</Titles>
 
  )
}

export default Title