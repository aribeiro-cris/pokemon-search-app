function Navigation({ sprite, id, fetchPokemonById }) {
    function goToPrevious() {
        if (id > 1) {
            fetchPokemonById(id - 1);
        }
    }

    function goToNext() {
        fetchPokemonById(id + 1);
    }

    return (
        <div>
            {sprite && id > 1 && <button className="navigation-button" onClick={goToPrevious}>Previous</button>}
            {sprite && id < 1025 && <button className="navigation-button" onClick={goToNext}>Next</button>}
        </div>
    );
}

export default Navigation;