import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Parent from './Components/Parent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbar/>
      <Navbar/>
      <Sidebar/>
      <Parent/>
    </div>
  );
}

export default App;
