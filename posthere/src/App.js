import React from 'react';
import './App.css';
import Loginfn from "./components/Loginfn"
import Signupfn from "./components/Signupfn"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
// import HomePage from './components/HomePage';
// import Navigation from './components/Navigation';
// import LogInForm from './components/LogInForm';
import RegisterForm from './components/RegisterForm';
// import Home from './components/Home';
import PostList from "./components/PostList"
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

