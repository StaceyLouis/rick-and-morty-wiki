import styled from "styled-components"

const Container = styled.footer`
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: flex-end;
    padding-top: 6em;

    h2{
        
        height: 10px;
        color: white;
        a{
            text-decoration: none;
            color: grey;

        }
    }
`
const Footer = () => {
  return (
    <Container>
        <h2>Designed and Developed by <a href="https://www.github.com/staceylouis">Stacey Louis</a></h2>
    
    </Container>
  )
}

export default Footer