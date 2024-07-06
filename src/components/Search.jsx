import PokemonDisplay from './PokemonDisplay.jsx';
import Navigation from './Navigation.jsx';
import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch } from "react-icons/fa";
import { capitalizeFirstLetter } from './PokemonDisplay.jsx';

//import { useCache } from './CacheMechanism.jsx';

function Search() {

    const [pokemon, setPokemon] = useState("");
    const [pokemonName, setPokemonName] = useState("");
    const [sprite, setSprite] = useState("");
    const [id, setId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [types, setTypes] = useState([]);
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    //arrays to get all pokemons from the api
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);

    const fetchAllPokemons = useMemo(() => async () => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
        const data = await fetch(url)
        data.json().then(json => {
            setPokemonList(json.results)
        })
        .catch(error => {
            console.error('Error fetching Pokémon list. Error: ' + error);
        })
    }, []);

    useEffect(() => {
        fetchAllPokemons();
    }, []);

    const fetchPokemonByName = useMemo(() => async (name) => {

        const url = "https://pokeapi.co/api/v2/pokemon/" + name;

        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Pokémon '${name}' not found. Please try again.`);
            }

            const data = await response.json();
            console.log(data);

            setId(data.id);
            setPokemonName(data.name);
            setSprite(data.sprites.front_default);
            setTypes(data.types.map(t => t.type.name));
            setWeight(data.weight);
            setHeight(data.height);
            setPokemon(data.name); //to update the input box when moving to previous or next

            setErrorMessage("");

        } catch (error) {
            setErrorMessage(`Pokémon '${name}' not found. Please try again.`);
            setId("");
            setSprite("");
            setPokemonName("");
            setHeight("");
            setWeight("");
            setTypes([]);

            console.log(error);
        }
    }, []);

    async function fetchPokemon() {
        const foundPokemon = pokemonList.find(p => p.name.toLowerCase() === pokemon.toLowerCase());
        if (foundPokemon) {
            fetchPokemonByName(foundPokemon.name);
        } else {
            setErrorMessage(`Pokémon '${pokemon}' not found. Please try again`);
            setId("");
            setSprite("");
            setPokemonName("");
            setHeight("");
            setWeight("");
            setTypes([]);
        }
    }

    function handleKeyPressed(event) {
        if (event.key === 'Enter') {
            fetchPokemon();
        }
    }

    function handlePokemonChange(event) {
        const input = event.target.value;
        setPokemon(input);

        const filteredPokemons = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(input.toLowerCase()));
        setFilteredPokemonList(filteredPokemons);
        
        console.log(filteredPokemonList);
    }

    function SelectPokemon(name) {
        setPokemon(name);
        setFilteredPokemonList([]);
        fetchPokemonByName(name.toLowerCase());
    }

    return (
        <div className='search-container'>
            <div className='search-bar-container'>
                <div className='input-wrapper-container'>
                    <div className='input-wrapper'>
                        <FaSearch id="search-icon" />
                        <input 
                            type="text"
                            className="input-box"
                            value={pokemon} 
                            onChange={handlePokemonChange}
                            onKeyPress={handleKeyPressed}
                            placeholder="Type to search.."
                        />
                    </div>
                    <div className='search-results-container'>
                        {filteredPokemonList.length > 0 && (
                            <ul className="autocomplete-container">
                                {filteredPokemonList.map((p) => (
                                    <li key={p.name} onClick={() => SelectPokemon(p.name)} data-testid='autocomplete-1'>
                                        {capitalizeFirstLetter(p.name)}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <button className='search-button' onClick={fetchPokemon}>Search</button>
            </div>
            
            <PokemonDisplay 
                sprite={sprite} 
                pokemonName={pokemonName} 
                id={id} 
                weight={weight}
                height={height}
                types={types}
                errorMessage={errorMessage} />
            <Navigation 
                sprite={sprite} 
                id={id} 
                fetchPokemonById={fetchPokemonByName} />
        </div>
    );
}

export default Search;