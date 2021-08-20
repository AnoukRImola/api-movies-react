import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Card from "./components/Card";

//azucar sintactico: JSX => JS + HTML/XML

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Section />
      <Card />
    </div>
  );
}

export default App;
