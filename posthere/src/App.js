import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LogInForm from './Components/LogInForm';
import RegisterForm from './Components/ResgisterForm';
import Home from './Components/Home';

function App() {
  return (
    <div>
    <div className='App'></div>
    <BrowserRouter>
    <Navigation/>
    <Switch>
      <Route path='/login' render={() => <LogInForm/>}/>
      <Route path='/register' render={() => <RegisterForm/>}/>
      <Route path='/' render={() => <Home/> } />
    </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;

