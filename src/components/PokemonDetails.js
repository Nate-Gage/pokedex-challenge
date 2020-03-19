import React from 'react';
import { Link } from 'react-router-dom';

const PokemonDetails = (props) => {

    return (
        <div>
            This is the details page. The pokemon's name is {props.name}
            <br />
            <Link to="/">Back</Link>
        </div>
    );
};

export default PokemonDetails;