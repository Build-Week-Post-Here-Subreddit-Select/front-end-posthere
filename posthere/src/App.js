import React from 'react';
import './App.css';
import Loginfn from "./Components/Loginfn"
import Signupfn from "./Components/Signupfn"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import RegisterForm from './components/RegisterForm';
// import Home from './components/Home';
import PostList from "./components/PostList"

import PrivateRoute from './Components/PrivateRoute';
import HomePage from './Components/HomePage';

import LogInForm from './Components/LogInForm';
import RegisterForm from './Components/RegisterForm';

function App() {
  return (
  <Router>
    <div className="App">
      <div className = "nav">
      <Route exact path = "/" component={Loginfn} />
      
      <Link to = "login">Login</Link>
      <Link to = "signup">Sign Up</Link>
      
      <img src='https://i.imgur.com/cCJnjJR.png' alt='logo'/>

      <Link to = "register">Sign Up</Link>
      

      </div>
        <Switch>
      
    {/* <Route path ="/signup" component={Signupfn}/> */}
    <Route path='/signup' render={() => <RegisterForm/>}/>

    <Route path = "/login"  component={Loginfn} />
    {/* <Route path='/login' render={() => <LogInForm/>}/>  */}

    <PrivateRoute exact path="/postlist" component={PostList} />
  </Switch>
    </div>
    </Router>
  )}

  
export default App;

