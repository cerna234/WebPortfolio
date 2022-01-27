import styled from "styled-components";
import Home from './Pages/Home'
import AllProjects from "./Pages/AllProjects";
import NavBar from "./Components/NavBar";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import React, { Component } from 'react';
import ErrorPage from "./Pages/ErrorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";






const Container = styled.div`
width: 100%;
height: 100%;
padding: 0;
margin-top: 0;
box-sizing: 0;
`

const App = () => {
  return (

   
    
    
      <Router basename="/WebPortfoliov2">
        

      <NavBar/>
       
       
          
          
      

       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Projects" component={AllProjects} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={ErrorPage} />
      </Switch>
          
          
         
          
      
      <Footer/>
      </Router>
       
          
       

  );
};

export default App;
