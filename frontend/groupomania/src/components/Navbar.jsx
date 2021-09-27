import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Auth from "../contexts/auth";


const Navbar = () => {
    const { isAuthenticated} = useContext(Auth);
    

    return (
        <ul className="navbar-nav ml-auto">
          { (!isAuthenticated && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Se connecter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  S'enregistrer
                </NavLink>
              </li>
            </>
          )) || (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/account">
                  Mon compte
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" /*</li>onClick={}*/>Déconnexion</button>
              </li>
            </>
          )}
        </ul>
    )
}

export default Navbar;