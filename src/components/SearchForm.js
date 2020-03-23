import React from 'react';
import '../App.css';

const SearchForm = (props) => {

    return (
        <div className="searchContainer">
            <form onSubmit={props.handleSearch}>
                <input
                    name="searchInput"
                />
                <button>Search</button>
                <br />
                <br />
                <span className="search__heading">Select Type</span>
                <br />
                <input type="checkbox" className="Bug" onChange={props.handleTypeChange} />Bug
                <input type="checkbox" className="Dark" onChange={props.handleTypeChange} />Dark
                <input type="checkbox" className="Electric" onChange={props.handleTypeChange} />Electric
                <input type="checkbox" className="Fighting" onChange={props.handleTypeChange} />Fighting
                <input type="checkbox" className="Fire" onChange={props.handleTypeChange} />Fire
                <input type="checkbox" className="Flying" onChange={props.handleTypeChange} />Flying
                <input type="checkbox" className="Grass" onChange={props.handleTypeChange} />Grass
                <br />
                <input type="checkbox" className="Ground" onChange={props.handleTypeChange} />Ground
                <input type="checkbox" className="Normal" onChange={props.handleTypeChange} />Normal
                <input type="checkbox" className="Poison" onChange={props.handleTypeChange} />Poison
                <input type="checkbox" className="Psychic" onChange={props.handleTypeChange} />Psychic
                <input type="checkbox" className="Rock" onChange={props.handleTypeChange} />Rock
                <input type="checkbox" className="Water" onChange={props.handleTypeChange} />Water
                <br />
                <br />
                <span className="search__heading" name="weaknessSelector">Select Weakness</span>
                <br />
                <input type="checkbox" className="Bug" onChange={props.handleWeaknessChange} />Bug
                <input type="checkbox" className="Dark" onChange={props.handleWeaknessChange} />Dark
                <input type="checkbox" className="Electric" onChange={props.handleWeaknessChange} />Electric
                <input type="checkbox" className="Fighting" onChange={props.handleWeaknessChange} />Fighting
                <input type="checkbox" className="Fire" onChange={props.handleWeaknessChange} />Fire
                <input type="checkbox" className="Flying" onChange={props.handleWeaknessChange} />Flying
                <input type="checkbox" className="Grass" onChange={props.handleWeaknessChange} />Grass
                <br />
                <input type="checkbox" className="Ground" onChange={props.handleWeaknessChange} />Ground
                <input type="checkbox" className="Normal" onChange={props.handleWeaknessChange} />Normal
                <input type="checkbox" className="Poison" onChange={props.handleWeaknessChange} />Poison
                <input type="checkbox" className="Psychic" onChange={props.handleWeaknessChange} />Psychic
                <input type="checkbox" className="Rock" onChange={props.handleWeaknessChange} />Rock
                <input type="checkbox" className="Water" onChange={props.handleWeaknessChange} />Water


            </form>
        </div>
    );
};

export default SearchForm;


