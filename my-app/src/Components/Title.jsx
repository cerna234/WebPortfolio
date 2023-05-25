import React from 'react'
import styled from 'styled-components'
import {Desktop,Desktop2,Horizontal} from '../responsive'
import MainColor from '../variables'
import { motion } from "framer-motion"

const Container = styled.div`
    width: 100%;
    height: 4vh;
    min-height:100px;
    max-height:400px;
   
    
   
    h3{
      
        display: flex;
        justify-content: center;
        color: ${MainColor};
        text-shadow:5px 5px 10px #191919;
        font-size: 20px;
        ${Desktop({fontSize:"30px"})}
    
      
    
    }
   
`




const Title = (props) => {
    return (
        <Container>
       
            
            <motion.h3
                 initial={{y:-100}}
                 whileInView={{ y: 0 }}
                 transition={{duration: 1}}
            >{props.title}</motion.h3>
        
        </Container>
    )
}

export default Title