import styled from "styled-components";
import {Desktop} from '../responsive'
import Title from "./Title";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #242424;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`

const Info = styled.div`
padding-top: 10vh;
width: 100%;
height: 100vh;

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
        color: #E27357;
    }
    p{
        color: #a09f9f;
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
              <Title title="ABOUT"/>
              <Info>
                    <TopSection>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque autem tempora, excepturi voluptates nulla asperiores recusandae. Quos debitis necessitatibus eius veritatis doloremque, repellendus cumque. Delectus suscipit perferendis vel ratione!</p>
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
