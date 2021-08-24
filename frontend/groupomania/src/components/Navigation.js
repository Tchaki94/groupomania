import React from 'react';
import { NavLink } from "react-router-dom"


const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact activeClassName="nav-active" to="/login">
                  Se connecter
            </NavLink>
            <NavLink exact activeClassName="nav-active" to="/register">
                  S'enregistrer
            </NavLink>
        </div>
    );
};

export default Navigation;