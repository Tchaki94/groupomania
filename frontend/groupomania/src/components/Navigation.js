import React from 'react';
import { NavLink } from "react-router-dom"
import logo from './logo';

const Navigation = () => {
    return (
        <div>
            <logo />;
        </div>
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="profil" activeClassName="nav-active">
                Profil
            </NavLink>
        </div>
    );
};

export default Navigation;