import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  );
};
