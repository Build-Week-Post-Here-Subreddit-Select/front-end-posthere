import React from 'react';
import './App.css';
import Loginfn from "./Components/Loginfn"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';

import RegisterForm from './Components/RegisterForm';
import PostList from "./Components/PostList"
import LogInForm from "./Components/Loginfn"


function App() {
  return (
  <Router>
    <div className="App">
      <div className = "nav">
      <Route exact path = "/" component={Loginfn} />
      
      <Link to = "login">Login</Link>
      
      <img src='https://i.imgur.com/cCJnjJR.png' alt='logo'/>

      <Link to = "signup">Sign Up</Link>
      

      </div>
        <Switch>
      
    <Route path='/signup' render={() => <RegisterForm/>}/>

    <Route path='/login' render={() => <LogInForm/>}/> 

    <PrivateRoute exact path="/postlist" component={PostList} />
  </Switch>
    </div>
    </Router>
  )}

  
export default App;

