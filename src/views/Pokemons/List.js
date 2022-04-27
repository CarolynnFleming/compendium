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
        pokemon.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase()
        .trim())
        );
        setResults(filteredPokemons);
    };
}