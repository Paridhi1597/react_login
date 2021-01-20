import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Switch , Route, Redirect } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Course from './Course';
import Students from './Students'
import Login from './Login'
import Navbar from './Navbar';

import StudentList from './StudentList';


function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path = "/" component = {Home}/>
         <Route exact path = "/course" component = {Course}/>
         <Route exact path = "/student" component = {Students}/>
         <Route exact path = "/login" component = {Login}/>
         <Route exact path = "/resultList" component = {StudentList}/>
         <Redirect to = "/"></Redirect>
      </Switch>
   
      
  
    </div>
  );
}

export default App;
