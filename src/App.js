import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Inicio from "./components/Inicio";
import SectionPersonas from "./components/SectionPersonas";
import SectionProgram from "./components/SectionProgram";


//azucar sintactico: JSX => JS + HTML/XML

function App() {

  return (
    <Router>
    <div className="App">
      
      
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route exact path="/peliculas">
          <Section />
          </Route>
          <Route exact path="/programas">
          <SectionProgram/>
          </Route>
          <Route exact path="/personas">
          <SectionPersonas/>
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
