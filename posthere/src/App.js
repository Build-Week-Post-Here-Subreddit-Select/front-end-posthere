import React from 'react';
import './App.css';
import Loginfn from "./Components/Loginfn"
import Signupfn from "./Components/Signupfn"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import HomePage from './Components/HomePage';
// import Navigation from './components/Navigation';
import LogInForm from './Components/LogInForm';
import RegisterForm from './Components/RegisterForm';
// import Home from './components/Home';

function App() {
  return (
  <Router>
    <div className="App">
      <div className = "nav">
      <Route exact path = "/" component={Loginfn} />
      
      <Link to = "login">Login</Link>
      
      <img src='https://i.imgur.com/cCJnjJR.png' alt='logo'/>

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

