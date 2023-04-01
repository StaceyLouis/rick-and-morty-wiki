import { Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useState } from "react"

const NavContainer = styled.section`
    height: 5em;
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
    &:hover{
        color: var(--property);
    }
    &:nth-child(2):hover{
        color: var(--acid-green);
    }
   
`
const Nav = () => {
    const [active, setActive] = useState(false)
  return (
    <NavContainer>
        <motion.div 
         animate={
            active
              ? { color: "#ff00b1", }
              : { color: "#0D00FF", }
          }
          onClick={() => setActive(!active)}>
        <Links to="/">Home</Links>
        </motion.div>
        <motion.div
         animate={
            active
              ? { color: "#ff00b1", }
              : { color: "#0D00FF", }
          }
          onClick={() => setActive(!active)}>
        <Links to='/characters'>Characters</Links>
        </motion.div>
    </NavContainer>
  )
}

export default Nav