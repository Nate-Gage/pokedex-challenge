import React, { useState, useEffect } from 'react';
import '../App.css';

const PokemonDetails = ({ match }) => {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
        );
        const response = await fetchItem.json();
        const thePokemon = response.pokemon.filter((item) => {
            return item.name === match.params.name;
        });
        setItem(thePokemon[0]);
    }

    return (
        <div>
            <div className="pokemonDescrip">
                <h3 className="pokemonDescrip__name">{item.name} | {item.num}</h3>
                <img src={item.img} />
                <p>Type: {item.type}</p>
                <p>Weaknesses: {item.weaknesses}</p>
            </div>
        </div>
    );
};

export default PokemonDetails;