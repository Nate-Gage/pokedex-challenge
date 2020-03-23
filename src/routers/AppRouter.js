import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import PokedexApp from '../components/PokedexApp';
import PokemonDetails from '../components/PokemonDetails';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={PokedexApp} />
                <Route path='/details/:name' component={PokemonDetails} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;