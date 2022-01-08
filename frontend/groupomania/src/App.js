import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './img/logo.png';

import { BrowserRouter as Router } from "react-router-dom";
import AuthService from "./services/auth.service";

import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Posts from "./pages/Post"

import BoardUser from "./components/Users/BoardUser";

import EventBus from "./common/EventBus";

const App = () => {

    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
      const user = AuthService.getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
      }
  
      EventBus.on("logout", () => {
        logOut();
      });
  
      return () => {
        EventBus.remove("logout");
      };
    }, []);
  
    const logOut = () => {
      AuthService.logout();
      setCurrentUser(undefined);
    };


    return (
      <Router>
        <nav className="navbar navbar-expand">
          <img className="img-groupo" alt="logo" src={logo}
          ></img>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Accueil
              </Link>
            </li>
  
            {currentUser && (
              <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Profil
                </Link>
              </li>
              <li>
                <Link to={"/post"} className="nav-link">
                Post
                </Link>
              </li>
              </div>
            )}
          </div>
  
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.name}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  Déconnexion
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Connexion
                </Link>
              </li>
  
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  S'inscrire
                </Link>
              </li>
            </div>
          )}
        </nav>
  
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" render={(props) => <Login  {...props} set={setCurrentUser} /> } />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/post" component={Posts} />
            <Route path="/user" component={BoardUser} />
          </Switch>
        </div>
  
        {/* <AuthVerify logOut={logOut}/> */}
      </Router>
    );
}

export default App;
