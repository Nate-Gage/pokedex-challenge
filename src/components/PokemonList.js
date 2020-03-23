import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const PokemonList = (props) => {
    const pokemon = props.pokemonArray;

    return (
        <div>
            <ul>
                {pokemon.map((item, index) => {
                    return (
                        <div>
                            <li key={index}>
                                <span>
                                    <Link to={`/details/${item.name}`}>{item.name}</Link> | Number: {item.num}</span>
                                <br />
                                <span>Type: {item.type.map((value) => {
                                    return <span>{value} </span>;
                                })}
                                </span><br />
                                <span>Weakness: {item.weaknesses.map((value) => {
                                    return <span>{value} </span>;
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