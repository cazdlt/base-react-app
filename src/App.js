import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

import "./main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
