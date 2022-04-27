import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import  PokemonDetail from './views/Pokemons/Detail';
import PokemonList from './views/Pokemons/List';


export default function App() {
  return (
    <Router>
    <Switch>
      <Route path="/pokemons/:id">
       <PokemonDetail /> 
      </Route>
      <Route path="/pokemons">
        <PokemonList />
      </Route>
      <Route path="/">
        <p>Home Page</p>
        <Link to="/pokemons">View List</Link>
      </Route>
    </Switch>
    </Router>
  )
}