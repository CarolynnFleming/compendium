import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PokemoCard from '../../components/Pokemon/PokemonCard';

export default function PokemonDetail() {
    const[pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
}