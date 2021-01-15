import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Switch , Route, Redirect } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Course from './Course';
import Student from './Student';
import Login from './Login'
import Navbar from './Navbar';


function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path = "/" component = {Home}/>
         <Route exact path = "/course" component = {Course}/>
         <Route exact path = "/student" component = {Student}/>
         <Route exact path = "/login" component = {Login}/>
         <Redirect to = "/"></Redirect>
      </Switch>
   
      
  
    </div>
  );
}

export default App;
