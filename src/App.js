import './App.css';
import { Routes, Route , useLocation} from 'react-router';
import { useState , useEffect} from 'react';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import axios from 'axios';
import { AnimatePresence } from "framer-motion";

import Characters from './components/characters/Characters'
import CharacterDetailPage from './components/characters/CharacterDetailPage';
import Footer from './components/Footer';


function App() {
  const [charData, setCharData] = useState([])
  const [epData, setEpData] = useState([])
  const [pageCount, setPageCount] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageInfo,setPageInfo] = useState([])
  const location = useLocation()
  
  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then(res=>{
      setCharData(res.data.results)
      setPageCount(res.data.info.pages)
    }).catch(err=> console.log(err))
  }, [currentPage])

  const handleChange = (evt, value)=>(
    setCurrentPage(value)
  )

  return (
    <div className="App">
      <Nav />
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Homepage/>}/>
        <Route path='characters' element={<Characters handleChange={handleChange} current={currentPage} count={pageCount} characters={charData}/>}/>
        <Route path='characters/:id' element={<CharacterDetailPage characters={charData}/>}/>
      </Routes>
      </AnimatePresence>
      <Footer />
     
    </div>
  );
}

export default App;
