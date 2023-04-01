import Title from '../utils/Title'
import '../App.css'
import { motion } from "framer-motion"
import { useState } from 'react'


const Homepage = () => {
  const [isVisible] = useState(0)

  return (
  
     <motion.h1 
     initial={{fontSize: '5em'}}
       animate={{ fontSize: "9em" }}
       exit={{ x: "100%",opacity:0 }}
       transition={{ duration: 2, type: "spring", stiffness: 100 }}
      className='title'> Rick and Morty </motion.h1>
    
  )
}

export default Homepage