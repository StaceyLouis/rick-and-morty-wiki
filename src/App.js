import './App.css';
import { Routes, Route } from 'react-router';
import Nav from './components/Nav';
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
