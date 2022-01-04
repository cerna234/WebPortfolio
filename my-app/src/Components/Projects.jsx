import styled from "styled-components";
import {Desktop} from '../responsive'
import Title from "./Title";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #242424;

`


const Projects = () =>{


    return(
        <Container>
               <Title title="PROJECTS"/>
        </Container>
    )
} 


export default Projects
