import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
     <Route exact path="/" component={About}/>
     <Route exact path="/project" component={Project}/>
     <Route exact path="/contact" component={Contact}/>
     <Footer/> 
    </div>
    </Router>
  );
}

export default App;



