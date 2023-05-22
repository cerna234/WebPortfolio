import styled from "styled-components";
import {Desktop,Horizontal} from '../responsive'
import Title from "./Title";
import {Project} from '../Data'
import {FaGithub,FaCode} from "react-icons/fa"
import { VscInspect} from "react-icons/vsc";
import MainColor from "../variables";


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
            height: 90vh;
            ${Horizontal({height:"200vh"})}
           font-size: 30px;
           min-height: 300px;
           display: flex;
           flex-direction: column;
          
           align-items: center;
           
           
           ${Desktop({width:"90%",height:"70vh"})};


           p{
               color: #c5c4c4;
               padding-top: 20px;
               padding-bottom: 20px;
               font-size: 10px;
               ${Desktop({fontSize:"15px"})};
               width: 80%;
               text-align: center;
              
               position: relative;
               text-shadow: 5px 5px 5px #222;
               
             
           }
          
           .ProjectName{
               font-size: 18px;
               font-weight: bold;
               color: white;
               ${Desktop({fontSize:"30px"})};
           }

           

           
        }

       

        .projectImage{
            width: 80%;
            position: relative;
        
            height: 200px;
            ${Desktop({height:"500px"})};
            box-shadow: 5px 4px 7px #131313d8;
            background-size: cover;
            background-position: center;


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
           
       
        
           <ProjectContainer>

           
        {Project.slice(props.start,props.end).map((d, idx) =>{
     return (

     <div className="contain"  key={idx}>
         
        <div className="GridItem">

       
         <p className="ProjectName">{d.ProjectName}</p>
         <div alt={d.alt} className="projectImage" style={{backgroundImage: "url(" + d.ProjectUrl + ")"}}><a className="ImageLink" target="_blank" href={d.ProjectLiveUrl}></a></div>
         <p style={{height:"50%"}}>{d.ProjectDescription}</p>

         <Links>
            <a target="_blank" href={d.ProjectLiveUrl}><VscInspect/></a>
            <a target="_blank" href={d.ProjectGithubLink}><FaGithub/></a>
         </Links>


         </div>
         
      
     
     </div>
    
     )
   })}
   </ProjectContainer>

  
  
    </Container>

    )

    
   
} 


export default Projects
