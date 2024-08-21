import logo from './logo.svg';
import './App.css';
import CIncrement from './Components/CIncrement';
import Increment from './Components/Increment';
import Conditional from './Components/Conditional';
import List from './Components/List';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <CIncrement/>
      <Increment/>
      <Conditional/>
      <List/>
      <Home/>
    </div>
  );
}

export default App;
