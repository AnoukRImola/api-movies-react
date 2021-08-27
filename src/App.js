import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./views/Section";
import Inicio from "./views/Inicio";
import SectionPersonas from "./views/SectionPersonas";
import SectionProgram from "./views/SectionProgram";


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
