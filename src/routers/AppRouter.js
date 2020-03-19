import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import PokedexApp from '../components/PokedexApp';
import PokemonDetails from '../components/PokemonDetails';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={PokedexApp} exact={true} />
                <Route path="/details" component={PokemonDetails} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;