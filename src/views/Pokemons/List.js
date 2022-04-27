import { useEffect, useState  } from "react";
import { Link } from 'react-router-dom';
import PokemonCard from '../../components/Pokemon/PokemonCard';

export default function PokemonList() {
    const [ pokemon, setPokemon] = useState([]);
    const [loading, setloading] = useState(true);
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);

    const isSearching = !!search.length;
    const noResults = isSearching && !results.length;
    const pokemonList = isSearching ? results : pokemons;
}