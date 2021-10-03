import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Adddoner from "./Adddoner";
import Home from "./Home";

function Main() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/adddoner">
            <Adddoner />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
