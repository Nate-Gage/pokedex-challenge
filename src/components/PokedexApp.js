import React from 'react';
import '../App.css';
import SearchForm from './SearchForm';
import PokemonList from './PokemonList';

class PokedexApp extends React.Component {
    state = {
        pokemonArray: [],
        typeFilter: [],
        weaknessFilter: []
    };
    handleTypeChange = (e) => {
        const checkedTypes = this.state.typeFilter;
        if (e.target.checked) {
            console.log("Pushing type: " + e.target.className)
            checkedTypes.push(e.target.className)
        } else {
            console.log("Filtering out type: " + e.target.className)
            var a = checkedTypes.indexOf(e.target.className);
            checkedTypes.splice(a, 1)
        }
        this.setState(() => ({
            typeFilter: checkedTypes
        }));
        console.log(this.state.typeFilter);
    }
    handleWeaknessChange = (e) => {
        const checkedWeakness = this.state.weaknessFilter;
        if (e.target.checked) {
            console.log("Pushing weakness: " + e.target.className)
            checkedWeakness.push(e.target.className)
        } else {
            console.log("Filtering out weakness: " + e.target.className)
            var a = checkedWeakness.indexOf(e.target.className);
            checkedWeakness.splice(a, 1);
        }
        this.setState(() => ({
            weaknessFilter: checkedWeakness
        }));
        console.log(this.state.weaknessFilter);
    }
    handleSearch = (e) => {
        e.preventDefault();
        const fetchItems = async () => {
            const searchValue = e.target.elements.searchInput.value;
            const checkedTypes = this.state.typeFilter;
            const checkedWeakness = this.state.weaknessFilter;
            const data = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
            );
            const response = await data.json();
            console.log(response);

            this.setState(() => ({
                pokemonArray: response.pokemon.filter((item) => {
                    return checkedTypes.every((value) => {
                        return (item.type.indexOf(value) >= 0);
                    }) && checkedWeakness.every((value) => {
                        return (item.weaknesses.indexOf(value) >= 0);
                    }) && item.name.toLowerCase().includes(searchValue.toLowerCase());
                })
            }))
        };
        fetchItems();
        console.log(this.state.pokemonArray);
    }
    render() {
        return (
            <div>
                <SearchForm
                    handleSearch={this.handleSearch}
                    handleTypeChange={this.handleTypeChange}
                    handleWeaknessChange={this.handleWeaknessChange}
                />
                <PokemonList
                    pokemonArray={this.state.pokemonArray}
                />
            </div>
        );
    }
};

export default PokedexApp;