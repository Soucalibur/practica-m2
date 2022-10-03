import "./App.css";
import {Route} from "react-router-dom";
import React from "react";
import Home from "./components/Home/index.jsx"
import Catalogue from "./components/Catalogue/index.jsx"

function App() {
  return (
  <div className ="App">
    <h2>APP</h2>

    <React.Fragment>
          
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Catalogue}/>
          
    </React.Fragment>
  
  </div>
  );
}

export default App;
