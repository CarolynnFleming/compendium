export default function PokemonCard({ name, url_image }) {
    return( 
    <div>
        <p>{name}</p>
        <img src={url_image}/>
    </div>
    );
}