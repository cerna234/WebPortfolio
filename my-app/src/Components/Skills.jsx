import styled from "styled-components";
import {Desktop,Horizontal} from '../responsive'
import Title from "./Title";
import {skills} from '../Data';
import { motion } from "framer-motion"
const Container = styled.div`
    width: 100%;
    height: 100vh;
    ${Horizontal({height:"200vh"})};
    background-color: #242424;
    min-height:700px;

    .skillsContainer{
      
        display: grid;
        grid-template-columns: auto auto auto;
        padding: 10px;
        padding-top: 10vh;
        width: 80%;
        position: relative;
        left: 10%;


        .GridItem{
            
           
            position: relative;
           
            
            padding: 20px;
            font-size: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;


            p{
                color: #9c9c9c;
                font-size: 50px;
                
            }
        
        }

        
    }

    

`


const Skills = () =>{
    

    return(
        <Container>
        
            
               <div className="skillsContainer">
      {skills.map((d, idx) =>{
         return (

         <motion.div
         initial={{x:-100,opacity:0}}
         whileInView={{ x: 0,opacity:100 }}
         transition={{duration: 1}}
         className="GridItem" key={idx}>
             
            
             <p>{d.name}</p>
             
          
         
         </motion.div>
        
         )
       })}
      </div>
        </Container>
    )
} 


export default Skills
