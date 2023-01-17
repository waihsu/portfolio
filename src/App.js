
import React from "react";
//import { Routes, Route } from "react-router-dom";
import { Navigation, Home, About, Service, Contact } from "./components";

const App = () => {
  return (

    
    <div className="App">
        <Navigation />
      <div className="main">
        <Home />
        <About />
        <Service />
        
        <Contact />
      </div>
    </div>
    
  );
};

export default App;
