import React from 'react';
import Navigation from "./Components/Navigation"
import Register from "./Components/Register"
import Login from "./Components/Login"
import Forgot from './Components/Forgot';
import Home from "./Components/Home"
import ProtectedComp from "./Components/ProtectedComp"
import ResetPassword from "./Components/ResetPassword"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/forgot" component={Forgot}/>
    <Route exact path="/reset-password/:email" component={ResetPassword}/>
    <Route exact path = "/protected" component={ProtectedComp}/>
    </Switch>
    
    
    </BrowserRouter>

    
  );
}

export default App;
