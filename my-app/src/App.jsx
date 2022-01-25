import styled from "styled-components";
import Home from './Pages/Home'
import AllProjects from "./Pages/AllProjects";
import NavBar from "./Components/NavBar";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import React, { Component } from 'react';
import ErrorPage from "./Pages/ErrorPage";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes ,Route, Switch } from 'react-router-dom';





const Container = styled.div`
width: 100%;
height: 100%;
padding: 0;
margin-top: 0;
box-sizing: 0;
`

const App = () => {
  return (

   
    
    
      <Router basename={process.env.PUBLIC_URL}>

      <NavBar/>
       
       
          
          
       <Routes>
       <Route path='*' element={<ErrorPage />} />
       <Route exact path='/WebPortfoliov2' element={<Home/>} />
          <Route  path='/WebPortfoliov2/Projects' exact element={<AllProjects/>} />
          <Route  path='/WebPortfoliov2/contact' exact element={<Contact/>} />
          
       </Routes>
          
          
         
          
      
      <Footer/>
      </Router>
       
          
       

  );
};

export default App;
