import React from 'react';
import './App.css';
import Loginfn from "./components/Loginfn"
import Signupfn from "./components/Signupfn"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import LogInForm from './components/LogInForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';

function App() {
  return (
  <Router>
    <div className="App">
      <div className = "nav">
      <Route exact path = "/" component={Loginfn} />
      <Link to = "login">Login</Link>
      <Link to = "register">Sign Up</Link>
      </div>
        <Switch>
      
    {/* <Route path ="/signup" component={Signupfn}/> */}
    <Route path='/register' render={() => <RegisterForm/>}/>

    {/* <Route path = "/login"  component={Loginfn} /> */}
    <Route path='/login' render={() => <LogInForm/>}/> 

    <PrivateRoute exact path="homepage" component={HomePage} />
  </Switch>
    </div>
    </Router>
  )}
// function App() {
//   return (
//     <div>
//     <div className='App'></div>
//     <BrowserRouter>
//     <Navigation/>
//     <Switch>
//       <Route path='/login' render={() => <LogInForm/>}/>
//       <Route path='/register' render={() => <RegisterForm/>}/>
//       <Route path='/' render={() => <Home/> } />
//     </Switch>
//     </BrowserRouter>
//   </div>
//   );
// }
  
export default App;

