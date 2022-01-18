import styled from "styled-components";
import {Desktop,Horizontal} from '../responsive'
import {FaGithub,FaLinkedinIn} from "react-icons/fa"
import MainColor from "../variables";

const Container = styled.div`
    width: 100%;
    height: 15vh;
    ${Horizontal({height:"30vh"})};
    background-color: #222222;
    display: flex;
    justify-content: space-evenly;

`


const Section = styled.div`
width: 50%;
height: 100%;



h2{

    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    padding-top: 40px;
    font-size: 20px;
    ${Desktop({fontSize:"23px"})};
    color: ${MainColor};
}


`

const Icons = styled.div`
    width: 100%;
    height: 100%;
   
    position: relative;
    display: flex;
    justify-content: space-evenly;
    
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




const Footer = () =>{


    return(
        <Container>
              <Section>
                  <h2>
                    CERNA
                  </h2>

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