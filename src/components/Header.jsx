
function Header() {
    const logoUrl = "./images/pokemon.svg";
    
    return (
        <div data-testid="render-1" className="top-container">
            <img src={logoUrl} alt="pokemon-logo" className="pokemon-logo" />
            <h1>Pokémon, gotta catch'em all!</h1>
        </div>
    );
}

export default Header;