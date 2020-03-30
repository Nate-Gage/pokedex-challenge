import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const PokemonList = (props) => {
    const pokemonArray = props.pokemonArray;

    return (
        <div>
            <ul>
                {pokemonArray.map((pokemon, index) => {
                    return (
                        <div key={index}>
                            <li>
                                <span>
                                    <Link to={`/details/${pokemon.name}`}>{pokemon.name}</Link> | Number: {pokemon.num}</span>
                                <br />
                                <span>Type: {pokemon.type.map((pokemonType) => {
                                    return <span key={pokemonType}>{pokemonType}</span>;
                                })}
                                </span><br />
                                <span>Weakness: {pokemon.weaknesses.map((pokemonWeakness) => {
                                    return <span key={pokemonWeakness}>{pokemonWeakness}</span>;
                                })}
                                </span>
                            </li>
                            <br />
                        </div>

                    );
                })}
            </ul>
        </div>
    );
};

export default PokemonList;