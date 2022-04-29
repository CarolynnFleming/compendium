import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PokemonCard from '../../components/Pokemon/PokemonCard';

export default function PokemonDetail() {
    const[pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
useEffect(() => {
    const getPokemon = async () => {
        const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`);
        const { _id, pokemon, url_image } = await res.json();
        const pokemonData = {
             id: _id,
            name: pokemon,
            image: url_image
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
    <h1> <PokemonCard name={`Pokemon: ${pokemon.name} `} url_image={pokemon.image}/>
    </h1>
)}
</>
);
}