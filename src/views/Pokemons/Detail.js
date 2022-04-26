import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PokemonCard from '../../components/Pokemon/PokemonCard';

export default function PokemonDetail() {
    const[pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
useEffect(() => {
    const getPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const { data } = await res.json();
        const pokemonData = {
            id: data.id,
            name: `${data.name}`,
        };
        setPokemon(pokemonData);
        setLoading(false);
    };
    getPokemon();
}, [id]);

return (
<>
<p>
    <Link to="/pokemons">Go Back </Link>
</p>
{ loading ? (
    <p>Loading Pokemon</p>
) : (
    <h1> <PokemonCard name={`Pokemon: ${pokemon.name}`}/>
    </h1>
)}
</>
);
}