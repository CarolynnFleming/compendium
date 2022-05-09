export default function PokemonCard({ name, url_image }) {
    return( 
    <div>
        <p>{name}</p>
        <img alt="pokemon"src={url_image}/>
    </div>
    );
}