import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./containers/home";
import "./App.css";

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <div className="App">
      <Home />
    </div>
  </React.Fragment>
);

export default App;
