import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles";

import Home from "./Pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
