import React from "react";
import "./App.css";
import Home from "./routes/Home";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Route path="/" component={Home} />
    </HashRouter>
  );
}

export default App;
