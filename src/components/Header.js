import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = (props) => (
    <div className="header__container">
        <Link to="/"><h1 className="header__title">Pokedex Catalog</h1></Link>
    </div>
);

export default Header;