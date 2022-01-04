import React from 'react'

import styled from "styled-components";
import Splash from '../Components/Splash';
import About from '../Components/About';
import Skills from '../Components/Skills'
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Icons from '../Components/Icons';
import { useState } from 'react/cjs/react.development';
import Title from '../Components/Title'






const Container = styled.div`
width: 100%;
height: 100%;
background-color:rgb(202, 202, 202);
margin-top: 0;


`
const Home = () => {




    return (
       <Container>
       
        <Icons/>
        <Splash/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
        
   
        
       </Container>
       
    )
}

export default Home
