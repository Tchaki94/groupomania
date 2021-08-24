import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Account from "./pages/users/Account";
import Login from "./pages/users/Login";
import Profil from "./pages/users/Profil";
import Register from "./pages/users/Register";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
