import { Link } from "react-router-dom"
import styled from "styled-components"

const NavContainer = styled.section`
    height: 2em;
    display: flex;
    justify-content: flex-end;
    max-width: 100vw;
    font-family: "Swifty";

`
const Links = styled(Link)`
    text-decoration: none;
    margin: 1em;
    color: var(--punctuation);
    font-size: 2rem;
    &:visited{
        color: var(--property);
    }
    &:nth-child(2):visited{
        color: var(--acid-green);
    }
    &:hover{
        color: var(--property);
    }
    &:nth-child(2):hover{
        color: var(--acid-green);
    }
   
`
const Nav = () => {
  return (
    <NavContainer>
        <Links to="/">Home</Links>
        <Links to='/characters'>Characters</Links>
    </NavContainer>
  )
}

export default Nav