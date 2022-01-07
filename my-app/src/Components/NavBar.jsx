import React, { useState } from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";
const Nav = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: #2c2c2c50;
    
    



`

const Logo = styled.div`
padding: 2rem 1rem;
color: #eb7139;
text-decoration: none;
font-weight: bold;
font-size: 25px;

@media (max-width:768px) {
    display: flex;
    z-index: ${({isOpen}) => (isOpen ? "100" : "100")};
    font-size: 20px;
    
    
}

`

const Hamburger = styled.div`
display: flex;
flex-direction: column;
cursor: pointer;
color: white;
font-size: 20px;
padding: 0 2rem;
display: none;



@media (max-width:768px) {
    display: flex;
    z-index: ${({isOpen}) => (isOpen ? "100" : "100")};
    
    
}

`


const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;


a{
 
    text-decoration: none;
    color: white;
    padding: 1rem 1rem;
}

a:hover{
   
        color: #ce5219;
        border-bottom: solid 2px #ce5219 ;
        transition: ease-in-out 0.5s;
        padding: none;
}

@media (max-width:768px) {
    width: 100%;
    flex-direction: column;

    background: #363636;
    transition: ease-in-out 1s;
    position: relative;
    justify-content: center;
    
    height: ${({isOpen}) => (isOpen ? "110vh" : "0vh")};
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0%")};
    bottom: ${({isOpen}) => (isOpen ? "20vh" : "20px")};

    
    
}

`

const MenuLinks = styled.div`
    padding: 1rem 2rem;
 
    text-align: center;
    text-decoration: none;
 


   
    
  

    
`

const NavBar = () => {

    

    const [isOpen, setIsOpen] = useState(false);
    


    return (
        
       <Nav>
           <Logo href="#"> 
                CERNA
           </Logo>
           <Hamburger onClick={() => setIsOpen(!isOpen) }>
               <GiHamburgerMenu/>
           </Hamburger>
           <Menu isOpen={isOpen}>
               
               
                <MenuLinks onClick={() => setIsOpen(!isOpen)}><Link to="/">Home</Link></MenuLinks>
               <MenuLinks onClick={() => setIsOpen(!isOpen)}> <Link to="/Projects">PROJECTS</Link></MenuLinks>
               <MenuLinks onClick={() => setIsOpen(!isOpen)}> <Link to="/contact">CONTACT</Link></MenuLinks>
               

              
           </Menu>

       </Nav>
    )
}

export default NavBar
