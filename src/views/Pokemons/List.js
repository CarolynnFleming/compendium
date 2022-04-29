import { useEffect, useState  } from "react";
import { Link } from 'react-router-dom';
import PokemonCard from '../../components/Pokemon/PokemonCard';

export default function PokemonList() {
    const [ pokemons, setPokemons] = useState([]);
    const [loading, setloading] = useState(true);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const isSearching = !!search.length;
    const noResults = isSearching && !results.length;
    const pokemonList = isSearching ? results : pokemons;

    const handleSearch = (event) => {
        setSearch(event.target.value);
        const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.pokemon
        .toLowerCase()
        .includes(event.target.value.toLowerCase()
        .trim())
        );
        setResults(filteredPokemons);
    };

    useEffect(() => {
        const getPokemons = async () => {
            const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');

            const pokemons = await res.json();
            
            setPokemons(pokemons.results);
            setloading(false);
        };
        getPokemons();
    }, []);

    return(
        <>
        <h3>Pokemon Catch Them All!!</h3>
        {loading ? (
            <p>Loading...</p>
        ) : (
        <>
        <input
        placeholder="Find a Pokemon"
        value={search}
        onChange={handleSearch}/>
        <ul>
            {pokemonList.map((pokemon) => {
                return(
                    <li key={pokemon._id}>
                        <Link to={`/pokemons/${pokemon._id}`}>
                            <PokemonCard name={pokemon.pokemon}/>
                        </Link>
                    </li>
                );
            })}
        </ul>
        </>
        )}
        {noResults && <p>No results</p>}
        </>
    );
}