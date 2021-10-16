import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from "./components/Main";
import Nav from "./components/Nav"
import Home from './components/Home'
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
      <Nav />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/create' >
          <Create />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
