import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Navbar from "./components/Navbar";
import PeliculaDetalle from "./components/PeliculaDetalle";
import ProgramaDetalle from "./components/ProgramaDetalle";
import NotFound from "./components/NotFound";
import SectionPeliculas from "./views/SectionPeliculas";
import SectionInicio from "./views/Home";
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
            <SectionInicio />
          </Route>

          <Route exact path="/peliculas">
            <SectionPeliculas />
          </Route>
          <Route exact path="/peliculas/:id">
            <PeliculaDetalle/>
          </Route>

          <Route exact path="/programas">
            <SectionProgram/>
          </Route>
          <Route exact path="/programas/:id">
            <ProgramaDetalle/>
          </Route>

          <Route exact path="/personas">
            <SectionPersonas/>
          </Route>

          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
