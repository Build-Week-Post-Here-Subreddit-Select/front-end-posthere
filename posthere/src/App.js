import React from 'react';
import './App.css';
import Loginfn from "./components/Loginfn"
import Signupfn from "./components/Signupfn"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';

function App() {
  return (
  <Router>
    <div className="App">
      <div className = "nav">
      <Route exact path = "/" component={Loginfn} />
      <Link to = "login">Login</Link>
      <Link to = "signup">Sign Up</Link>
      </div>
        <Switch>
      
    <Route path ="/signup" component={Signupfn}/>
    <Route path = "/login"  component={Loginfn} />
    <PrivateRoute exact path="homepage" component={HomePage} />
  </Switch>
    </div>
    </Router>
  );
}

export default App;
