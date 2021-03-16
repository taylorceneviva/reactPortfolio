import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


