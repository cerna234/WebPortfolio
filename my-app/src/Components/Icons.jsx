
import styled from "styled-components"

import {FaGithub,FaLinkedinIn} from "react-icons/fa"

import {Desktop} from '../responsive'



const Container = styled.div`
width: 30%;
height: 100vh;
position: fixed;
z-index: 100;
left: 70%;
`


const InnerContainerICons = styled.div`
 
 width: 80%;
 height: 30%;
 position: relative;
 left: 30%;
 top: 20%;
color: #bfbfbf;
font-size: 20px;
text-align: center;
padding-top: 10vh;
display: flex;
flex-direction: column;
justify-content: space-around;
opacity: 0;
${Desktop({ opacity:100})}



`

const Links = styled.div`

text-decoration: none;

a{
    text-decoration:none;
    color: white;
}
a:hover{
    color: #E27357;
}
   
`

const Icons = () => {
    return (
        <Container>
            <InnerContainerICons>
                <Links>
                    <a target="blank" href="https://github.com/"><FaGithub/></a>
                </Links>
          
                <Links>
                <a target="blank" href="https://github.com/"><FaLinkedinIn/></a>
                   
                </Links>
        
      
            </InnerContainerICons>
        </Container>
    )
}

export default Icons