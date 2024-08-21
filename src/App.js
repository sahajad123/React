
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Login/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Contact' element = {<Contact/>}/>
          <Route path='/About' element = {<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
