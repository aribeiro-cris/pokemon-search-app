export const capitalizeFirstLetter = (pokemonName) => {
    if(!pokemonName) {
        return "";
    } else {
        return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    }
}

function PokemonDisplay({ sprite, pokemonName, id, weight, height, types, errorMessage }) {
    return (
        <div>
            {sprite && <img src={sprite} className="sprite-img" alt="sprite image" />}
            {pokemonName && <p>Pokemón: {capitalizeFirstLetter(pokemonName)}</p>}
            {id && <p>ID: {id}</p>}
            {weight && <p>Weight: {weight} kgs</p>}
            {height && <p>Height: {height} cms</p>}
            {types.length > 0 && <p>Types: {capitalizeFirstLetter(types.join(', '))}</p>}
            {errorMessage && <div><p>{errorMessage}</p></div>}
        </div>
    );
}

export default PokemonDisplay;