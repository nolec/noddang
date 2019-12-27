import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Provider } from "react-redux";
import store from "../store";

library.add(fab);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  );
}

export default App;
