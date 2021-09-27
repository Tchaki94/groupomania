import React, {useState} from 'react';
import "./App.css";
import { HashRouter, Switch, Route} from "react-router-dom"
import Account from "./pages/users/Account";
import Login from "./pages/users/Login";
import Profile from "./pages/users/Profile";
import Register from "./pages/users/Register";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import { hasAuthenticated } from './services/AuthApi';
import Auth from "./contexts/auth";
import AuthenticatedRoute from './components/AuthenticatedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <HashRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <AuthenticatedRoute path="/account" component={Account}/>
            <AuthenticatedRoute path="/profile" component={Profile}/>
          </Switch>
        </div>
      </HashRouter>
    </Auth.Provider>
  );
}

export default App;
