import styled from "styled-components";
import {Desktop,Horizontal} from '../responsive'
import Title from "./Title";
import {Project} from '../Data'
import {FaGithub,FaCode} from "react-icons/fa"
import { VscInspect} from "react-icons/vsc";
import MainColor from "../variables";
import { motion } from "framer-motion"


const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #242424;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 40px;
    min-height:600px;
    

`


const ProjectContainer = styled.div`

        display: grid;
        grid-template-columns:  auto;
        ${Desktop({gridTemplateColumns:"auto auto"})}
        padding: 10px;
        padding-top: 10vh;
        width: 100%;
        height: 100%;
        position: relative;
        
        
        
        
        
        
        

        .GridItem{
            position: relative;
            width: 100%;
            position: relative;
            height: 100%;
            padding-top:30px;
           font-size: 30px;
           min-height: 700px;
           display: flex;
           flex-direction: column;
          
          
           align-items: center;
           
           
           ${Desktop({width:"90%",height:"80vh"})};


           
          
           .ProjectName{
               font-size: 16px;
               font-weight: bold;
               
               color: white;
               height:50px;
               width:80%;
               ${Desktop({fontSize:"27px",height:"400px"})};
               text-align:center;
           }

           .projectDescription{
            height:20vh;
            font-size:10px;
            ${Desktop({fontSize:"12px",height:"100vh"})}
            width:80%;
            padding-top: 40px;
            color: rgb(230, 230, 230);
            font-weight: bold;
            
           
           }

           
        }

       

        .projectImage{
            width: 80%;
            position: relative;
            background-size:cover;
            height: 200px;
            ${Desktop({height:"1000px",backgroundPosition: "cover"})};
            box-shadow: 5px 4px 7px #131313d8;
            background-size: cover;
            


            a{
                width: 100%;
                height: 100%;
                position: absolute;
                background: none;
                right: 0%;
            }
        }
        
`

const Links = styled.div`
    width: 100%;
    height: 20vh;
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    position: relative;
    padding-bottom: 20px;
   

    a{
        color: #a0a0a0;
        font-size: 20px;
        ${Desktop({fontSize:"30px"})};
    }

    a:hover{
        color: ${MainColor};
        transform: scale(1.1);
        transition: ease-in-out 0.2s;
    }
`

const ViewALL = styled.div`
width: 100%;
height: 10vh;
text-align: center;
`


const Projects = (props) =>{

    return(
       
        <Container>
           
       
            <motion.div
                initial={{y: -500,opacity:0}}
                whileInView={{y: 0, opacity:100 }}
                transition={{duration: 1}}
            >
            <ProjectContainer>

                    
            {Project.slice(props.start,props.end).map((d, idx) =>{
            return (

            <div className="contain"  key={idx}>
            
            <div className="GridItem">


            <p className="ProjectName">{d.ProjectName}</p>
            <div alt={d.alt} className="projectImage" style={{backgroundImage: "url(" + d.ProjectUrl + ")"}}><a className="ImageLink" target="_blank" href={d.ProjectLiveUrl}></a></div>
            <p className="projectDescription">{d.ProjectDescription}</p>

            <Links>
                <a target="_blank" href={d.ProjectLiveUrl}><VscInspect/></a>
                <a target="_blank" href={d.ProjectGithubLink}><FaGithub/></a>
            </Links>


            </div>
            


            </div>

            )
            })}
            </ProjectContainer>

            </motion.div>
          

  
  
    </Container>

    )

    
   
} 


export default Projects
