import styled from "styled-components";
import {Desktop,Horizontal} from '../responsive'
import Title from "./Title";
import MainColor from "../variables";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #242424;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height:700px;

    


`

const Info = styled.div`
padding-top: 10vh;
width: 100%;
height: 100vh;
${Horizontal({height:"200vh"})};

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
`


const TopSection = styled.div`
    width: 100%;
    height: 30%;

    p{
        width: 80%;
        position: relative;
        left: 10%;
        color: #a09f9f;
        font-size: 18px;
        position: relative;
        bottom: 5vh;
        ${Desktop({fontSize:"20px",width:"60%",left:"20%",bottom:"0vh"})}
    }

`


const BottomSection = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    ${Desktop({flexDirection:"row"})}

    h2{
        color: ${MainColor};
        font-size: 20px;
        position: relative;
         ${Desktop({fontSize:"30px"})}
       
    }
    p{
        color: #adadad;
        font-size: 16px;
        ${Desktop({fontSize:"20px"})}
    }

    div{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;


    }
`



const About = () =>{
    


    return(
        
        <Container>
            
              <Info>
                    <TopSection>
                        <p>Software Developer with years of experience bringing expertise in design, testing, and maintenance of software systems. Equipped with a diverse skill set and proficient in  various languages and systems. 3 years experience with various client work and real world projects </p>
                    </TopSection>

                    <BottomSection>
                        <div>
                            <h2>Phone Number:</h2>
                            <p>(909) 553-8685</p>
                        </div>


                        <div>
                            <h2>EMAIL:</h2>
                            <p>cerna2424@gmail.com</p>
                        </div>
                    </BottomSection>
              </Info>

              

             
        
        </Container>

        
    )

    
} 


export default About
