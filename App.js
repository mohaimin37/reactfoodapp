import React from 'react'
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import "./styles/navbar.css"
import Signup from "./components/Signup"
import Mycart from './components/Mycart';
import Contact from './components/Contact';
import Appprovider from './components/Reducercontext';
import Myorders from './components/Myorders';


function App() {
  return (
    <>
    <Appprovider>
    <Navbar/>

    <Routes>
    <Route exact path='/' element = {<Home/>}></Route>
    <Route exact path='/login' element = {<Login/>}></Route>
    <Route exact path='/register' element = {<Signup/>}></Route>
    <Route exact path='/mycart' element = {<Mycart/>}></Route>
    <Route exact path='/contact' element = {<Contact/>}></Route>
    <Route exact path='/myorders' element = {<Myorders/>}></Route>






    </Routes>
    </Appprovider>

    
    </>
  )
}

export default App

