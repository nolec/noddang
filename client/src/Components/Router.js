import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./HomePage/Home";
import NavBar from "./NavBar/NavBar";
import Detail from "./DetailPage";

export default () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Detail} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  );
};
