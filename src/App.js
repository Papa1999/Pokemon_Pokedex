import logo from './logo.svg';
import './style/App.css';
import { Link, Routes, Route} from "react-router-dom"; 
import Pokedex from './Components/Pokedex';
import Pokemons from './Components/Pokemons';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path = "/" element = { <Pokemons/> }></Route>
        <Route path = "/pokedex" element = { <Pokedex/> }></Route>
      </Routes>


    </div>

  );
}

export default App;
