import { Link, Route, Switch } from "react-router-dom";
import { PokemonDetail } from './views/Pokemons/Detail';
import PokemonList from './views/Pokemons/List';


export default function App() {
  reutrn (
    <Switch>
      <Route path="/pokemons/:id">
       <PokemonDetail /> 
      </Route>\
      <Route path="/pokemons">
        <PokemonList />
      </Route>
      <Route oath="/">
        <p>Home Page</p>
        <link to="/Pokemons"> View List </link>
      </Route>
    </Switch>
  )
}