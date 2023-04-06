import styled from "styled-components";
import {Desktop,Horizontal} from '../responsive'
import {FaGithub,FaLinkedinIn} from "react-icons/fa"
import MainColor from "../variables";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 15vh;
    ${Horizontal({height:"30vh"})};
    background-color: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height:300px;

`


const Section = styled.div`
width: 50%;
height: 100%;







h2{

   
    text-align: center;
    position: relative;
    padding-top: 40px;
    font-size: 20px;
    ${Desktop({fontSize:"23px"})};
    color: ${MainColor};
}

a{
    color: ${MainColor};
    text-decoration: none;
}

`

const Icons = styled.div`
    width: 100%;
    height: 100%;
   
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    font-size: 20px;
    ${Desktop({fontSize:"30px"})};
    padding:40px;
    color: #b9b8b8;

    a{
        color: #777474;
    }

    a:hover{
        color: #E27357;
        transform: scale(1.1);
        transition: ease-in-out 0.2s;
    }

`

const LogoSection = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
`




const Footer = () =>{


    return(
        <Container>
        
                <Section>
                    <LogoSection>
                        <h2>
                        <Link to="/">CERNA</Link>
                        </h2>

                    </LogoSection>
                    

                </Section>

           
              
              <Section>
                  <Icons>
                      <a target="_blank" href="https://github.com/cerna234"><FaGithub/></a>
                      <a target="_blank" href="https://www.linkedin.com/in/miguel-cerna-0b133117b/"><FaLinkedinIn/></a>
                      

                  </Icons>
                  
              </Section>
        </Container>
    )
} 


export default Footer