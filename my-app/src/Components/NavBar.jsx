import React, { useState } from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {FaDownload } from "react-icons/fa";
import MainColor from '../variables';

import { GiHamburgerMenu } from "react-icons/gi";
import { Desktop } from '../responsive';
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
${Desktop({padding:" 2rem 7rem"})};


font-weight: bold;
font-size: 30px;

a{
    color: ${MainColor};
    text-decoration: none;
}

@media (max-width:768px) {
    display: flex;
    z-index: ${({isOpen}) => (isOpen ? "100" : "100")};
    font-size: 16px;
    
    
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
   
        color: ${MainColor};
        border-bottom: solid 2px ${MainColor}; ;
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
    font-size: 16px;

    
 
.Link{

    font-size: 16px;

}

   
    
  

    
`

const NavBar = () => {

    

    const [isOpen, setIsOpen] = useState(false);
    


    return (
        
       <Nav>
           
           <Logo  
           > 
                <Link to="/">CERNA</Link>
           </Logo>
           <Hamburger onClick={() => setIsOpen(!isOpen) }>
               <GiHamburgerMenu/>
           </Hamburger>
           <Menu isOpen={isOpen}>
               
               
               <MenuLinks onClick={() => setIsOpen(!isOpen)}><Link className='Link' to="/">HOME</Link></MenuLinks>
               <MenuLinks onClick={() => setIsOpen(!isOpen)}> <Link className='Link' to="/Projects">PROJECTS</Link></MenuLinks>
               <MenuLinks onClick={() => setIsOpen(!isOpen)}> <Link className='Link' to="/contact">CONTACT</Link></MenuLinks>
               <Link className='Link' to="files/MiguelCernaResume.pdf" target="_blank" download> RESUME <FaDownload/> </Link>
               

              
           </Menu>

       </Nav>
    )
}

export default NavBar
