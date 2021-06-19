import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Species from "./components/Species";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        </Switch>
        <Switch>
          <Route path="/species">
            <Species />
          </Route>
        </Switch>
       <Switch>
         <Route path='/about'>
          <About/>
         </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
