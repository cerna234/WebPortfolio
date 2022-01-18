import styled from "styled-components";
import Home from './Pages/Home'
import AllProjects from "./Pages/AllProjects";
import NavBar from "./Components/NavBar";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';





const Container = styled.div`
width: 100%;
height: 100%;
padding: 0;
margin-top: 0;
box-sizing: 0;
`

const App = () => {
  return (

   
    
    
      <Router>

      <NavBar/>
       
       
          
          
          <Routes >
          <Route exact path='/' element={<Home/>} />
          <Route  path='/Projects' exact element={<AllProjects/>} />
          <Route  path='/contact' exact element={<Contact/>} />
           
          </Routes>
      <Footer/>
      </Router>
       
          
       

  );
};

export default App;
