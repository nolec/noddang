import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import NavBar from "./NavBar/NavBar";

export default () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  );
};
