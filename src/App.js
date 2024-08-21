import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus : false
      }
    }
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;



