import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './pages/Home';
import Nav from './components/Navigation';
import NotFound from './pages/NotFound';
import Profil from './pages/Profil';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
